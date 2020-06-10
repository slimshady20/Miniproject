package com.jayden.web.travels;

import com.jayden.web.mappers.TravelMapper;
import com.jayden.web.proxy.Box;
import com.jayden.web.proxy.IFunction;
import com.jayden.web.proxy.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/travels")
public class TravelController {
    @Autowired Pager pager;
    @Autowired TravelMapper travelMapper;
    @Autowired Box<Object> box;

    public Map<?,?> list(@PathVariable("pageNumber") String pageNumber,
                         @PathVariable("searchWord") String searchWord){
        if(searchWord.equals("null")){
            System.out.println("검색어가 없음");
            pager.setSearchWord("");
        }else{
            System.out.println("검색어가" + searchWord);
            pager.setSearchWord(searchWord);
        }
        System.out.println("넘어온 페이지 번호"+pageNumber);
        pager.setNowPage(Integer.parseInt((pageNumber)));
        pager.setBlockSize(5);
        pager.setPageSize(10);
        pager.paging();
        IFunction<Pager, List<TravelDTO>> f = p -> travelMapper.selectTravels(p);
        List<TravelDTO> list = f.apply(pager);
        System.out.println("****************************");
        for(TravelDTO m : list) {
            System.out.println(m.toString());
        }
        box.clear();
        box.put("pager",pager);
        box.put("list",list);
        return box.get();
    }

    @GetMapping("travel/{searchWord}")
    public void Travel(@PathVariable String searchWord){
        System.out.println("넘어온 키워드"+ searchWord);
    }
}
