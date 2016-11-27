
var year3={
    m1 : { isEnable:false, star:0},
    m2 : { isEnable:false, star:0},
    m3 : { isEnable:false, star:0},
    m4 : { isEnable:false, star:0},
    m5 : { isEnable:false, star:0},
    m6 : { isEnable:false, star:0},
    m7 : { isEnable:false, star:0},
    m8 : { isEnable:false, star:0},
    m9 : { isEnable:false, star:0},
    m10 : { isEnable:false, star:0},
    m11 : { isEnable:false, star:0},
    m12 : { isEnable:false, star:0}
}

var year2={
    m1 : { isEnable:false, star:0},
    m2 : { isEnable:false, star:0},
    m3 : { isEnable:false, star:0},
    m4 : { isEnable:false, star:0},
    m5 : { isEnable:false, star:0},
    m6 : { isEnable:false, star:0},
    m7 : { isEnable:false, star:0},
    m8 : { isEnable:false, star:0},
    m9 : { isEnable:false, star:0},
    m10 : { isEnable:false, star:0},
    m11 : { isEnable:false, star:0},
    m12 : { isEnable:false, star:0},
    nextyear: year3.m1
}

var year1 = {
    m1 : { isEnable:true, star:0},
    m2 : { isEnable:true, star:0},
    m3 : { isEnable:true, star:0},
    m4 : { isEnable:true, star:0},
    m5 : { isEnable:true, star:0},
    m6 : { isEnable:true, star:0},
    m7 : { isEnable:true, star:0},
    m8 : { isEnable:true, star:0},
    m9 : { isEnable:true, star:0},
    m10 : { isEnable:true, star:0},
    m11 : { isEnable:true, star:0},
    m12 : { isEnable:true, star:0},
    nextyear: year2.m1
}


var userData = {
    TotalScore: 0,
    Year1: year1,
    Year2: year2,
    Year3: year3
}

module.exports = userData;