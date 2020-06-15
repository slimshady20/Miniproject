package com.jayden.web.travels;

import com.jayden.web.mappers.TravelMapper;
import com.jayden.web.proxy.Box;
import com.jayden.web.proxy.IFunction;
import com.jayden.web.proxy.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/travels")
public class TravelController {
    @Autowired Pager pager;
    @Autowired TravelMapper travelMapper;
    @Autowired Box<Object> box;
    @GetMapping("/{searchWord}/{pageNumber}")
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
        pager.setPageSize(20);
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

    @GetMapping("/{searchWord}")
    public Map<?,?> list(@PathVariable String searchWord) {
        System.out.println("넘어온 키워드" + searchWord);

        pager.setBlockSize(5);
        pager.setPageSize(20);
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
        System.out.println(box.get("pager"));
        return box.get();
    }
}
