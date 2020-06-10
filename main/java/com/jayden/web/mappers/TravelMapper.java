package com.jayden.web.mappers;


import com.jayden.web.proxy.Pager;
import com.jayden.web.travels.TravelDTO;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface TravelMapper {
    public List<TravelDTO> selectTravels(Pager pager);
    public int count();
}
