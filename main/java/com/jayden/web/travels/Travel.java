package com.jayden.web.travels;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Column;

@Data
@ToString
public class Travel {
    private Long seqNo;
    @Column(length = 150) private String areaNm;
    @Column(length = 150) private String stationNm;
    @Column(length = 50) private String statCd;
    @Column(length = 50) private String statlnNm;
    @Column(length = 50) private String statoutNO;
    @Column(length = 50) private String etcSt;
    @Column(length = 150) private String urlSt;


}
