{"version":3,"file":"cal-heatmap.min.js","sources":["cal-heatmap.js"],"names":["mergeRecursive","obj1","obj2","p","constructor","Object","e","CalHeatMap","_init","self","_domains","getDomain","options","start","map","d","getTime","root","d3","select","itemSelector","append","attr","paintOnLoad","paint","nextSelector","on","itemNamespace","event","preventDefault","loadNextDomain","previousSelector","loadPreviousDomain","displayLegend","width","domainGutter","cellPadding","afterLoad","loadOnInit","fill","getDatas","data","Date","getSubDomain","length","pop","svg","onComplete","this","allowedDataType","range","cellSize","cellRadius","domainMargin","domain","subDomain","weekStartOnMonday","dataType","verticalOrientation","label","position","align","offset","x","y","rotate","legend","legendCellSize","legendCellPadding","legendMargin","legendVerticalPosition","legendHorizontalPosition","highlight","itemName","domainLabelFormat","subDomainTitleFormat","empty","filled","subDomainDateFormat","subDomainTextFormat","legendTitleFormat","lower","inner","upper","animationDuration","onClick","afterLoadNextDomain","afterLoadPreviousDomain","afterLoadData","_domainType","min","name","level","row","column","Math","floor","getMinutes","format","date","connector","extractUnit","hour","getEndOfMonth","getDate","getHours","getWeekDay","formatHour","time","getFullYear","getDayOfYear","day","getWeekNumber","getMonth","week","month","year","type","x_day","_completed","height","NAVIGATE_LEFT","NAVIGATE_RIGHT","navigationDir","radius","selection","domainRotate","s","w","domainHorizontalLabelWidth","verticalDomainLabel","domainVerticalLabelHeight","max","outer","h","domainSvg","selectAll","enter","insert","domainWidth","domainHeight","i","classname","subDomainSvgGroup","rect","getHighlightClassName","positionSubDomainX","positionSubDomainY","call","text","formatDate","transition","duration","exit","remove","init","settings","validateSelector","selector","Element","hasOwnProperty","substring","console","log","indexOf","Array","isArray","splice","push","prototype","itemNb","shift","formatNumber","f","getNextDomain","unshift","getPreviousDomain","graphWidth","parent","legendWidth","legendItem","delay","down","up","display","each","domainUnit","subDomainUnit","htmlClass","count","index","dateIsEqual","isNow","date_a","date_b","getDay","getWeekDomain","weekStart","setDate","endDate","stop","mondays","sundays","getYearDomain","years","getMinuteDomain","minutes","getHourDomain","hours","getDayDomain","parseInt","days","getMonthDomain","setMonth","months","computeDaySubDomainSize","lastDayOfMonth","computeMinSubDomainSize","computeHourSubDomainSize","endOfMonth","computeWeekSubDomainSize","endWeekNb","startWeekNb","n","isNaN","total","datas","parseDatas","source","startDate","fillData","json","parseURI","csv","tsv","stats","str","replace","toISOString","next","previous","getSVG","styles",".graph",".graph-rect","rect.highlight","rect.now","text.highlight","text.now",".domain-background",".graph-label",".subdomain-text",".qi","j","whitelistStyles","filterStyles","attribute","property","value","getElement","element","dom","window","cs","getComputedStyle","item","getPropertyValue","k","css","currentStyle","string","style","l","XMLSerializer","serializeToString","String","formatted","prop","arguments","regexp","RegExp","define","amd"],"mappings":"AA8tDA,QAASA,gBAAeC,EAAMC,GAE7B,IAAK,GAAIC,KAAKD,GACb,IAGED,EAAKE,GADFD,EAAKC,GAAGC,cAAgBC,OACjBL,eAAeC,EAAKE,GAAID,EAAKC,IAE7BD,EAAKC,GAEf,MAAMG,GAEPL,EAAKE,GAAKD,EAAKC,GAIjB,MAAOF,GAtuDR,GAAIM,YAAa,WAEhB,YAoYA,SAASC,KAoDR,MAlDAC,GAAKC,SAAWD,EAAKE,UAAUF,EAAKG,QAAQC,OAAOC,IAAI,SAASC,GAAK,MAAOA,GAAEC,YAE9EP,EAAKQ,KAAOC,GAAGC,OAAOV,EAAKG,QAAQQ,cAEnCX,EAAKQ,KAAKI,OAAO,OAAOC,KAAK,QAAS,SAElCb,EAAKG,QAAQW,cAEhBd,EAAKe,QAKDf,EAAKG,QAAQa,gBAAiB,GACjCP,GAAGC,OAAOV,EAAKG,QAAQa,cAAcC,GAAG,SAAWjB,EAAKG,QAAQe,cAAe,WAC9ET,GAAGU,MAAMC,iBACTpB,EAAKqB,mBAIHrB,EAAKG,QAAQmB,oBAAqB,GACrCb,GAAGC,OAAOV,EAAKG,QAAQmB,kBAAkBL,GAAG,SAAWjB,EAAKG,QAAQe,cAAe,WAClFT,GAAGU,MAAMC,iBACTpB,EAAKuB,uBAKHvB,EAAKG,QAAQqB,eAChBxB,EAAKwB,cAAcC,EAAQzB,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQwB,aAGtC,OAA3B3B,EAAKG,QAAQyB,WAChB5B,EAAK4B,YAIF5B,EAAKG,QAAQ0B,WAChB7B,EAAK8B,KACJ9B,EAAK+B,SACJ/B,EAAKG,QAAQ6B,KACb,GAAIC,MAAKjC,EAAKC,SAAS,IACvBD,EAAKkC,aAAalC,EAAKC,SAASD,EAAKC,SAASkC,OAAO,IAAIC,OAE1DpC,EAAKqC,KACuC,kBAA5BrC,GAAKG,QAAQmC,YAC9BtC,EAAKsC,eAIA,EAtbR,GAAItC,GAAOuC,KAEPC,GAAmB,OAAQ,MAAO,MAAO,MAG7CD,MAAKpC,SAIJQ,aAAe,eAIfG,aAAc,EAOd2B,MAAQ,GAGRC,SAAW,GAGXf,YAAc,EAGdgB,WAAY,EAEZjB,aAAe,EAEfkB,cAAe,EAAE,EAAE,EAAE,GAErBC,OAAS,OAETC,UAAY,MAIZC,mBAAoB,EAIpB3C,MAAQ,GAAI6B,MAGZD,KAAO,GAEPgB,SAAUR,EAAgB,GAI1BX,YAAa,EAKboB,qBAAqB,EAGrBC,OAECC,SAAU,SAIVC,MAAO,SAGPC,QACCC,EAAG,EACHC,EAAG,GAGJC,OAAQ,KAER/B,MAAO,KAQRgC,QAAU,GAAG,GAAG,GAAG,IAGnBjC,eAAgB,EAEhBkC,eAAgB,GAEhBC,kBAAmB,EAEnBC,cAAe,GAAI,EAAG,EAAG,GAKzBC,uBAAwB,SAIxBC,yBAA0B,OAY1BC,aAOAC,UAAY,OAAQ,SASpBC,kBAAmB,KAGnBC,sBACCC,MAAO,SACPC,OAAQ,qCAUTC,oBAAqB,KASrBC,oBAAqB,KAGrBC,mBACCC,MAAO,yBACPC,MAAO,iCACPC,MAAO,0BAIRC,kBAAoB,IAEpB3D,cAAc,EAEdM,kBAAkB,EAElBJ,cAAe,cAQf0D,QAAU,KAGVhD,UAAY,KAGZiD,oBAAsB,aAGtBC,wBAA0B,aAG1BxC,WAAa,KAMbyC,cAAgB,SAAS/C,GAAQ,MAAOA,KAKzCO,KAAKyC,aACJC,KACCC,KAAM,SACNC,MAAO,GACPC,IAAK,WAAa,MAAO,KACzBC,OAAQ,WAAc,MAAO,IAC7BlC,UACCG,EAAI,SAAShD,GAAK,MAAOgF,MAAKC,MAAMjF,EAAEkF,aAAexF,EAAKgF,YAAYC,IAAIG,IAAI9E,KAC9EiD,EAAI,SAASjD,GAAK,MAAOA,GAAEkF,aAAexF,EAAKgF,YAAYC,IAAIG,IAAI9E,KAEpEmF,QACCC,KAAM,uBACNjC,OAAQ,GACRkC,UAAW,MAEZC,YAAc,SAAStF,GAAK,MAAOA,GAAEkF,eAEtCK,MACCX,KAAM,OACNC,MAAO,GACPC,IAAK,WAAa,MAAO,IACzBC,OAAQ,SAAS/E,GAChB,OAAON,EAAKG,QAAQ0C,QACnB,IAAK,MAAQ,MAAO,EACpB,KAAK,OAAS,MAAO,GACrB,KAAK,QAAU,MAAyC,GAAlC7C,EAAK8F,cAAcxF,GAAGyF,YAG9C5C,UACCG,EAAI,SAAShD,GACZ,MAA4B,UAAxBN,EAAKG,QAAQ0C,OACTyC,KAAKC,MAAMjF,EAAE0F,WAAahG,EAAKgF,YAAYa,KAAKT,IAAI9E,IAAsB,GAAfA,EAAEyF,UAAU,GAC5C,SAAxB/F,EAAKG,QAAQ0C,OAChByC,KAAKC,MAAMjF,EAAE0F,WAAahG,EAAKgF,YAAYa,KAAKT,IAAI9E,IAAyB,EAAnBN,EAAKiG,WAAW3F,GAE3EgF,KAAKC,MAAMjF,EAAE0F,WAAahG,EAAKgF,YAAYa,KAAKT,IAAI9E,KAE5DiD,EAAI,SAASjD,GAAK,MAAOA,GAAE0F,WAAahG,EAAKgF,YAAYa,KAAKT,IAAI9E,KAEnEmF,QACCC,KAAM,qBACNjC,OAAQ,QACRkC,UAAW,MAEZC,YAAc,SAAStF,GACtB,GAAI4F,GAAazF,GAAG0F,KAAKV,OAAO,KAChC,OAAOnF,GAAE8F,cAAgB,GAAMpG,EAAKqG,aAAa/F,GAAU4F,EAAW5F,KAGxEgG,KACCpB,KAAM,MACNC,MAAO,GACPC,IAAK,WAAa,MAAO,IACzBC,OAAQ,SAAS/E,GAEhB,OADAA,EAAI,GAAI2B,MAAK3B,GACNN,EAAKG,QAAQ0C,QACnB,IAAK,OAAS,MAAO,GACrB,KAAK,QAAU,MAAO7C,GAAKuG,cAAc,GAAItE,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAW,EAAG,IAAMxG,EAAKuG,cAAcjG,GAAK,CACjH,KAAK,OAAS,MAAO,KAGvB6C,UACCG,EAAI,SAAShD,GACZ,OAAON,EAAKG,QAAQ0C,QACnB,IAAK,OAAS,MAAO,EACrB,KAAK,QACJ,MAAO7C,GAAKuG,cAAcjG,GAAKN,EAAKuG,cAAc,GAAItE,MAAK3B,EAAE8F,cAAe9F,EAAEkG,YAC/E,KAAK,OAAS,MAAOxG,GAAKuG,cAAcjG,KAG1CiD,EAAI,SAASjD,GAAK,MAAON,GAAKiG,WAAW3F,KAE1CmF,QACCC,KAAM,gBACNjC,OAAQ,QACRkC,UAAW,MAEZC,YAAc,SAAStF,GAAK,MAAOA,GAAE8F,cAAgB,GAAKpG,EAAKqG,aAAa/F,KAE7EmG,MACCvB,KAAM,OACNC,MAAO,GACPC,IAAK,WAAa,MAAO,IACzBC,OAAQ,WACP,OAAOrF,EAAKG,QAAQ0C,QACnB,IAAK,OAAS,MAAO,GACrB,KAAK,QAAU,MAAO,EACtB,SAAS,MAAO,KAGlBM,UACCG,EAAG,SAAShD,GACX,OAAON,EAAKG,QAAQ0C,QACnB,IAAK,OAAS,MAAO7C,GAAKuG,cAAcjG,EACxC,KAAK,QAAU,MAAON,GAAKuG,cAAcjG,GAAKN,EAAKuG,cAAc,GAAItE,MAAK3B,EAAE8F,cAAe9F,EAAEkG,aAAe,IAG9GjD,EAAG,WACF,MAAO,KAGTkC,QACCC,KAAM,cACNjC,OAAQ,cACRkC,UAAW,MAEZC,YAAc,SAAStF,GAAK,MAAON,GAAKuG,cAAcjG,KAEvDoG,OACCxB,KAAM,QACNC,MAAO,GACPC,IAAK,WAAa,MAAO,IACzBC,OAAQ,WAAa,MAAO,KAC5BlC,UACCG,EAAI,SAAShD,GAAK,MAAOgF,MAAKC,MAAMjF,EAAEkG,WAAaxG,EAAKgF,YAAY0B,MAAMtB,IAAI9E,KAC9EiD,EAAI,SAASjD,GAAK,MAAOA,GAAEkG,WAAaxG,EAAKgF,YAAY0B,MAAMtB,IAAI9E,KAEpEmF,QACCC,KAAM,QACNjC,OAAQ,KACRkC,UAAW,MAEZC,YAAc,SAAStF,GAAK,MAAOA,GAAEkG,aAEtCG,MACCzB,KAAM,OACNC,MAAO,GACPC,IAAK,WAAa,MAAO,IACzBC,OAAQ,WAAa,MAAO,KAC5BlC,UACCG,EAAI,SAAShD,GAAK,MAAOgF,MAAKC,MAAMjF,EAAE8F,cAAgB7D,KAAKyC,YAAY2B,KAAKvB,IAAI9E,KAChFiD,EAAI,SAASjD,GAAK,MAAOA,GAAE8F,cAAgB7D,KAAKyC,YAAY2B,KAAKvB,IAAI9E,KAEtEmF,QACCC,KAAM,KACNjC,OAAQ,KACRkC,UAAW,MAEZC,YAAc,SAAStF,GAAK,MAAOA,GAAE8F,gBAIvC,KAAK,GAAIQ,KAAQrE,MAAKyC,YACrBzC,KAAKyC,YAAY,KAAO4B,MACxBrE,KAAKyC,YAAY,KAAO4B,GAAM1B,KAAO,KAAO0B,EAC5CrE,KAAKyC,YAAY,KAAO4B,GAAMzB,MAAQ5C,KAAKyC,YAAY4B,GAAMzB,MAC7D5C,KAAKyC,YAAY,KAAO4B,GAAMxB,IAAM7C,KAAKyC,YAAY4B,GAAMvB,OAC3D9C,KAAKyC,YAAY,KAAO4B,GAAMvB,OAAS9C,KAAKyC,YAAY4B,GAAMxB,IAC9D7C,KAAKyC,YAAY,KAAO4B,GAAMzD,YAC9BZ,KAAKyC,YAAY,KAAO4B,GAAMzD,SAASG,EAAIf,KAAKyC,YAAY4B,GAAMzD,SAASI,EAC3EhB,KAAKyC,YAAY,KAAO4B,GAAMzD,SAASI,EAAIhB,KAAKyC,YAAY4B,GAAMzD,SAASG,EAC3Ef,KAAKyC,YAAY,KAAO4B,GAAMnB,OAASlD,KAAKyC,YAAY4B,GAAMnB,OAC9DlD,KAAKyC,YAAY,KAAO4B,GAAMhB,YAAcrD,KAAKyC,YAAY4B,GAAMhB,WAKpErD,MAAKyC,YAAY6B,MAAMzB,IAAM,WAAc,MAAO,IAGlD7C,KAAKF,IAAM,KAEXE,KAAKuE,YAAa,EAIlBvE,KAAKtC,WAGL,IAAIwB,GAAQ,EAGRsF,EAAS,CAEbxE,MAAKyE,cAAgB,EACrBzE,KAAK0E,eAAiB,EAEtB1E,KAAK/B,KAAO,KAmEZ+B,KAAKxB,MAAQ,SAASmG,GA4JrB,QAASC,GAAOC,GACXpH,EAAKG,QAAQwC,WAAa,GAC7ByE,EACEvG,KAAK,KAAMb,EAAKG,QAAQwC,YACxB9B,KAAK,KAAMb,EAAKG,QAAQwC,YAuD5B,QAAS0E,GAAaD,GACrB,OAAQpH,EAAKG,QAAQ+C,MAAMM,QAC1B,IAAK,QACJ4D,EACCvG,KAAK,YAAa,SAASP,GAC3B,GAAIgH,GAAI,cACR,QAAOtH,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,QAAUmE,GAAK,cAAgBC,EAAEjH,GAAK,OAASiH,EAAEjH,GAAK,GAAK,MAChE,KAAK,OAASgH,GAAK,iBAAmBE,EAA6B,IAGpE,MAAOF,IAER,MACD,KAAK,OACJF,EACCvG,KAAK,YAAa,SAASP,GAC3B,GAAIgH,GAAI,eACR,QAAOtH,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,QAAUmE,GAAK,eAAiBC,EAAEjH,GAAKkH,GAA8B,MAAQD,EAAEjH,GAAK,GAAK,MAC9F,KAAK,OAASgH,GAAK,cAAgB,EAA+B,MAAQE,EAA6B,IAGxG,MAAOF,MA5OAJ,IAAAA,SACVA,GAAgB,EAGjB,IAAIO,GAAuD,QAAhCzH,EAAKG,QAAQ+C,MAAMC,UAAsD,WAAhCnD,EAAKG,QAAQ+C,MAAMC,SAEnFuE,EAA4BpC,KAAKqC,IAAI,GAA0B,EAAtB3H,EAAKG,QAAQuC,UACtD8E,EAA6B,CAE5BC,KACJC,EAA4B,EAC5BF,EAA6BxH,EAAKG,QAAQ+C,MAAMzB,OAIR,gBAA9BzB,GAAKG,QAAQyC,eACvB5C,EAAKG,QAAQyC,cAAgB5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,cAK5H,IAAI2E,GAAI,SAASjH,EAAGsH,GACnB,GAAInG,GAAQzB,EAAKG,QAAQuC,SAAS1C,EAAKgF,YAAYhF,EAAKG,QAAQ2C,WAAWuC,OAAO/E,GAAKN,EAAKG,QAAQwB,YAAY3B,EAAKgF,YAAYhF,EAAKG,QAAQ2C,WAAWuC,OAAO/E,EAChK,OAAWsH,KAAAA,QAAyBA,KAAU,EACtCnG,GAAS+F,EAA6BxH,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQyC,aAAa,GAAK5C,EAAKG,QAAQyC,aAAa,GAE5HnB,GAIJoG,EAAI,SAASvH,EAAGsH,GACnB,GAAIb,GAAS/G,EAAKG,QAAQuC,SAAS1C,EAAKgF,YAAYhF,EAAKG,QAAQ2C,WAAWsC,IAAI9E,GAAKN,EAAKG,QAAQwB,YAAY3B,EAAKgF,YAAYhF,EAAKG,QAAQ2C,WAAWsC,IAAI9E,EAI3J,OAHWsH,KAAAA,QAAyBA,KAAU,IAC7Cb,GAAU/G,EAAKG,QAAQuB,aAAegG,EAA4B1H,EAAKG,QAAQyC,aAAa,GAAK5C,EAAKG,QAAQyC,aAAa,IAErHmE,GAIJe,EAAY9H,EAAKQ,KAAKE,OAAO,UAC/BqH,UAAU,oBACV/F,KAAKhC,EAAKC,SAAU,SAASK,GAAK,MAAOA,KAOvC+B,EAAMyF,EACRE,QACAC,OAAO,OACPpH,KAAK,QAAS,SAASP,GACvB,GAAI4H,GAAcX,EAAEjH,GAAG,EAIvB,OAHI4G,MAAkB,IACrBzF,EAAQyG,GAAelI,EAAKG,QAAQ8C,oBAAsB,EAAIxB,IAExDyG,IAEPrH,KAAK,SAAU,SAASP,GACxB,GAAI6H,GAAeN,EAAEvH,GAAG,EAIxB,OAHI4G,MAAkB,IACrBH,EAASoB,GAAgBnI,EAAKG,QAAQ8C,oBAAsB8D,EAAS,IAE/DoB,IAEPtH,KAAK,IAAK,SAASP,EAAG8H,GACtB,GAAIpI,EAAKG,QAAQ8C,oBAChB,MAAO,EAEP,QAAOiE,GACN,KAAK,EAAQ,MAAOK,GAAEjH,GAAG,GAAQ8H,CACjC,KAAKpI,GAAKiH,eAAiB,MAAOM,GAAEjH,GAAG,IAAS8H,EAAE,EAClD,KAAKpI,GAAKgH,cAAgB,MAAOO,GAAEjH,GAAG,IAAS8H,EAAE,MAKnDvH,KAAK,IAAK,SAASP,EAAG8H,GACtB,IAAIpI,EAAKG,QAAQ8C,oBAOhB,MAAO,EANP,QAAOiE,GACN,KAAK,EAAQ,MAAOW,GAAEvH,GAAG,GAAQ8H,CACjC,KAAKpI,GAAKiH,eAAiB,MAAOY,GAAEvH,GAAG,IAAS8H,EAAE,EAClD,KAAKpI,GAAKgH,cAAgB,MAAOa,GAAEvH,GAAG,IAAS8H,EAAE,MAMnDvH,KAAK,QAAS,SAASP,GACvB,GAAI+H,GAAY,eACZ3C,EAAO,GAAIzD,MAAK3B,EACpB,QAAON,EAAKG,QAAQ0C,QACnB,IAAK,OAASwF,GAAa,MAAQ3C,EAAKM,UACxC,KAAK,MAAQqC,GAAa,MAAQ3C,EAAKK,SACvC,KAAK,OAASsC,GAAa,MAAQrI,EAAKuG,cAAcb,EACtD,KAAK,QAAU2C,GAAa,MAAQ3C,EAAKc,UACzC,KAAK,OAAS6B,GAAa,MAAQ3C,EAAKU,cAEzC,MAAOiC,IAITrI,GAAKQ,KAAKE,OAAO,UAAUG,KAAK,QAASY,EAAQzB,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQwB,aAC1F3B,EAAKQ,KAAKE,OAAO,UAAUG,KAAK,SAAUkG,EAAS/G,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQwB,aAE5FU,EAAIzB,OAAO,QACTC,KAAK,QAAS,SAASP,GAAQ,MAAOiH,GAAEjH,GAAG,GAAQN,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQwB,cAC5Fd,KAAK,SAAU,SAASP,GAAQ,MAAOuH,GAAEvH,GAAG,GAAQN,EAAKG,QAAQuB,aAAe1B,EAAKG,QAAQwB,cAC7Fd,KAAK,QAAS,oBAMhB,IAAIyH,GAAoBjG,EAAIzB,OAAO,OACjCC,KAAK,IAAK,WACV,OAAOb,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,OAAS,MAAOqE,GAA6BxH,EAAKG,QAAQyC,aAAa,EAC5E,SAAU,MAAO5C,GAAKG,QAAQyC,aAAa,MAG5C/B,KAAK,IAAK,WACV,OAAOb,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,MAAQ,MAAOuE,GAA4B1H,EAAKG,QAAQyC,aAAa,EAC1E,SAAU,MAAO5C,GAAKG,QAAQyC,aAAa,MAG5C/B,KAAK,QAAS,yBAGZ0H,EAAOD,EACTP,UAAU,OACV/F,KAAK,SAAS1B,GAAK,MAAON,GAAKkC,aAAa5B,KAC5C0H,QACApH,OAAO,IAGT2H,GACE3H,OAAO,QACPC,KAAK,QAAS,SAASP,GACvB,MAAO,aAAeN,EAAKwI,sBAAsBlI,IAA+B,OAAzBN,EAAKG,QAAQyE,QAAmB,gBAAkB,MAEzG/D,KAAK,QAASb,EAAKG,QAAQuC,UAC3B7B,KAAK,SAAUb,EAAKG,QAAQuC,UAC5B7B,KAAK,IAAK,SAASP,GAAK,MAAON,GAAKyI,mBAAmBnI,KACvDO,KAAK,IAAK,SAASP,GAAK,MAAON,GAAK0I,mBAAmBpI,KACvDW,GAAG,QAAS,SAASX,GACrB,MAA6B,QAAzBN,EAAKG,QAAQyE,QACT5E,EAAK4E,QAAQtE,EAAG,MADxB,SAIAqI,KAAKxB,GAiBP9E,EAAIzB,OAAO,QACTC,KAAK,QAAS,eACdA,KAAK,IAAK,SAASP,GACnB,GAAIiD,GAAIvD,EAAKG,QAAQyC,aAAa,EAClC,QAAO5C,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,MAAQI,GAAKmE,EAA0B,CAAG,MAC/C,KAAK,SAAWnE,GAAKsE,EAAEvH,GAAKoH,EAA0B,EAGvD,MAAOnE,GAAIvD,EAAKG,QAAQ+C,MAAMG,OAAOE,GAEJ,UAA9BvD,EAAKG,QAAQ+C,MAAMM,QAAsD,UAAhCxD,EAAKG,QAAQ+C,MAAMC,UAC/B,SAA9BnD,EAAKG,QAAQ+C,MAAMM,QAAqD,SAAhCxD,EAAKG,QAAQ+C,MAAMC,SAC5D,GAAK,KAGNtC,KAAK,IAAK,SAASP,GACnB,GAAIgD,GAAItD,EAAKG,QAAQyC,aAAa,EAClC,QAAO5C,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,QAAUG,GAAKiE,EAAEjH,EAAI,MAC1B,KAAK,SACL,IAAK,MAAQgD,GAAKiE,EAAEjH,GAAG,EAGxB,MAAiC,UAA7BN,EAAKG,QAAQ+C,MAAME,MACfE,EAAIkE,EAA6BxH,EAAKG,QAAQ+C,MAAMG,OAAOC,GACnC,UAA9BtD,EAAKG,QAAQ+C,MAAMM,OAAqB,GAAK,GAExCF,EAAItD,EAAKG,QAAQ+C,MAAMG,OAAOC,IAGrCzC,KAAK,cAAe,WACpB,OAAOb,EAAKG,QAAQ+C,MAAME,OACzB,IAAK,QACL,IAAK,OAAS,MAAO,OACrB,KAAK,MACL,IAAK,QAAU,MAAO,KACtB,SAAU,MAAO,YAGlBvC,KAAK,oBAAqB,WAAa,MAAO4G,GAAsB,SAAW,QAC/EmB,KAAK,SAAStI,EAAG8H,GAAK,MAAOpI,GAAK6I,WAAW,GAAI5G,MAAKjC,EAAKC,SAASmI,IAAKpI,EAAKG,QAAQ8D,qBACtF0E,KAAKtB,GAkCPkB,EAAK3H,OAAO,SAASgI,KAAK,SAAStI,GAAI,MAAON,GAAK6I,WAAWvI,EAAGN,EAAKG,QAAQkE,uBAMrC,OAArCrE,EAAKG,QAAQmE,qBAChBiE,EACE3H,OAAO,QACPC,KAAK,QAAS,SAASP,GAAK,MAAO,iBAAmBN,EAAKwI,sBAAsBlI,KACjFO,KAAK,IAAK,SAASP,GAAK,MAAON,GAAKyI,mBAAmBnI,GAAKN,EAAKG,QAAQuC,SAAS,IAClF7B,KAAK,IAAK,SAASP,GAAK,MAAON,GAAK0I,mBAAmBpI,GAAKN,EAAKG,QAAQuC,SAAS,IAClF7B,KAAK,cAAe,UACpBA,KAAK,oBAAqB,WAC1B+H,KAAK,SAAStI,GAAI,MAAON,GAAK6I,WAAWvI,EAAGN,EAAKG,QAAQmE,uBAO5DwD,EAAUgB,aAAaC,SAAS/I,EAAKG,QAAQwE,mBAC3C9D,KAAK,IAAK,SAASP,EAAG8H,GACtB,MAAOpI,GAAKG,QAAQ8C,oBAAsB,EAAKsE,EAAEjH,GAAG,GAAQ8H,IAE5DvH,KAAK,IAAK,SAASP,EAAG8H,GACtB,MAAOpI,GAAKG,QAAQ8C,oBAAuB4E,EAAEvH,GAAG,GAAQ8H,EAAK,IAE7DvH,KAAK,QAAS,SAASP,GAAK,MAAOiH,GAAEjH,GAAG,KAI1CwH,EAAUkB,OAAOF,aAAaC,SAAS/I,EAAKG,QAAQwE,mBAClD9D,KAAK,IAAK,SAASP,GACnB,GAAIN,EAAKG,QAAQ8C,oBAChB,MAAO,EAEP,QAAOiE,GACN,IAAKlH,GAAKgH,cAAgB,MAAOvF,EACjC,KAAKzB,GAAKiH,eAAiB,OAAQM,EAAEjH,GAAG,MAI1CO,KAAK,IAAK,SAASP,GACnB,MAAIN,GAAKG,QAAQ8C,oBACTiE,IAAkBlH,EAAKgH,cAAgBD,GAAUc,EAAEvH,GAAG,GAEtD,IAGR2I,SAIDjJ,EAAKqC,IADW,OAAbrC,EAAKqC,IACGA,EAEArC,EAAKQ,KAAKE,OAAO,UAAUqH,UAAU,OAC/C/F,KAAKhC,EAAKC,SAAU,SAASK,GAAI,MAAOA,MAK3CiC,KAAK2G,KAAO,SAASC,GAwIpB,QAASC,GAAiBC,GACzB,QAAWA,YAAoBC,WAAgC,gBAAbD,IAAuC,KAAbA,EArI7E,GAFArJ,EAAKG,QAAUZ,eAAeS,EAAKG,QAASgJ,IAEvC5G,KAAKyC,YAAYuE,eAAevJ,EAAKG,QAAQ0C,SAAmC,QAAxB7C,EAAKG,QAAQ0C,QAA4D,OAAxC7C,EAAKG,QAAQ0C,OAAO2G,UAAU,EAAG,GAE9H,MADAC,SAAQC,IAAI,eAAiB1J,EAAKG,QAAQ0C,OAAS,mBAC5C,CAGR,KAAKN,KAAKyC,YAAYuE,eAAevJ,EAAKG,QAAQ2C,YAAyC,SAA3B9C,EAAKG,QAAQ2C,UAE5E,MADA2G,SAAQC,IAAI,kBAAoB1J,EAAKG,QAAQ2C,UAAY,mBAClD,CAGR,IAAIP,KAAKyC,YAAYhF,EAAKG,QAAQ0C,QAAQsC,OAAS5C,KAAKyC,YAAYhF,EAAKG,QAAQ2C,WAAWqC,MAE3F,MADAsE,SAAQC,IAAI,IAAM1J,EAAKG,QAAQ2C,UAAY,kCAAoC9C,EAAKG,QAAQ0C,OAAU,MAC/F,CAMR,KAAKsG,EAASI,eAAe,aAC5B,OAAOvJ,EAAKG,QAAQ0C,QACnB,IAAK,OAAU7C,EAAKG,QAAQ2C,UAAY,OAAS,MACjD,KAAK,QAAU9C,EAAKG,QAAQ2C,UAAY,KAAO,MAC/C,KAAK,OAAU9C,EAAKG,QAAQ2C,UAAY,KAAO,MAC/C,KAAK,MAAS9C,EAAKG,QAAQ2C,UAAY,MAAQ,MAC/C,SAAU9C,EAAKG,QAAQ2C,UAAY,MAIrC,GAAqD,EAAjDN,EAAgBmH,QAAQ3J,EAAKG,QAAQ6C,UAExC,MADAyG,SAAQC,IAAI,kBAAoB1J,EAAKG,QAAQ6C,SAAW,6BACjD,CAYR,IATyC,OAArChD,EAAKG,QAAQkE,sBAChBrE,EAAKG,QAAQkE,oBAAsB9B,KAAKyC,YAAYhF,EAAKG,QAAQ2C,WAAW2C,OAAOC,MAG7C,OAAnC1F,EAAKG,QAAQ8D,oBAChBjE,EAAKG,QAAQ8D,kBAAoB1B,KAAKyC,YAAYhF,EAAKG,QAAQ0C,QAAQ4C,OAAOhC,SAI1E0F,EAASI,eAAe,UAAaJ,EAASI,eAAe,WAAaJ,EAASjG,MAAMqG,eAAe,SAAW,CACvH,OAAOvJ,EAAKG,QAAQ+C,MAAMC,UACzB,IAAK,OAASnD,EAAKG,QAAQ+C,MAAME,MAAQ,OAAS,MAClD,KAAK,QAAUpD,EAAKG,QAAQ+C,MAAME,MAAQ,MAAQ,MAClD,SAAUpD,EAAKG,QAAQ+C,MAAME,MAAQ,SAIJ,SAA9BpD,EAAKG,QAAQ+C,MAAMM,OACtBxD,EAAKG,QAAQ+C,MAAME,MAAQ,QACa,UAA9BpD,EAAKG,QAAQ+C,MAAMM,SAC7BxD,EAAKG,QAAQ+C,MAAME,MAAQ,QAc7B,KATK+F,EAASI,eAAe,UAAaJ,EAASI,eAAe,WAAaJ,EAASjG,MAAMqG,eAAe,aACxE,SAAhCvJ,EAAKG,QAAQ+C,MAAMC,UAAuD,UAAhCnD,EAAKG,QAAQ+C,MAAMC,YAChEnD,EAAKG,QAAQ+C,MAAMG,QAClBC,EAAG,GACHC,EAAG,KAKF6F,EAAiBpJ,EAAKG,QAAQQ,cAEjC,MADA8I,SAAQC,IAAI,gCACL,CAGR,IAAmD,OAA/CjJ,GAAGC,OAAOV,EAAKG,QAAQQ,cAAc,GAAG,GAE3C,MADA8I,SAAQC,IAAI,uDACL,CAGR,IAAI1J,EAAKG,QAAQa,gBAAiB,GAASoI,EAAiBpJ,EAAKG,QAAQa,cAExE,MADAyI,SAAQC,IAAI,gCACL,CAGR,IAAI1J,EAAKG,QAAQmB,oBAAqB,GAAS8H,EAAiBpJ,EAAKG,QAAQmB,kBAE5E,MADAmI,SAAQC,IAAI,oCACL,CAYR,KAT0C,gBAA/B1J,GAAKG,QAAQe,eAA6D,KAA/BlB,EAAKG,QAAQe,iBAClEuI,QAAQC,IAAI,+DACZ1J,EAAKG,QAAQe,cAAgB,eAGW,gBAA9BlB,GAAKG,QAAQyC,eACvB5C,EAAKG,QAAQyC,cAAgB5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,eAGxHgH,MAAMC,QAAQ7J,EAAKG,QAAQyC,cAC9B,OAAO5C,EAAKG,QAAQyC,aAAaT,QAChC,IAAK,GAAInC,EAAKG,QAAQyC,cAAgB,EAAG,EAAG,EAAG,EAAI,MACnD,KAAK,GAAI5C,EAAKG,QAAQyC,cAAgB5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAc5C,EAAKG,QAAQyC,aAAe,MACnJ,KAAK,GAAI5C,EAAKG,QAAQyC,cAAgB5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAK,MAC/J,KAAK,GAAI5C,EAAKG,QAAQyC,cAAgB5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAI5C,EAAKG,QAAQyC,aAAa,GAAK,MAC/J,KAAK,GAAI5C,EAAKG,QAAQyC,aAAe5C,EAAKG,QAAQyC,YAAc,MAChE,SAAU5C,EAAKG,QAAQyC,aAAakH,OAAO,GAc7C,GAVqC,gBAA1B9J,GAAKG,QAAQ6D,SACvBhE,EAAKG,QAAQ6D,UAAYhE,EAAKG,QAAQ6D,SAAUhE,EAAKG,QAAQ6D,SAAW,KAC9D4F,MAAMC,QAAQ7J,EAAKG,QAAQ6D,WAA8C,IAAjChE,EAAKG,QAAQ6D,SAAS7B,SACxEnC,EAAKG,QAAQ6D,UAAYhE,EAAKG,QAAQ6D,SAAS,GAAIhE,EAAKG,QAAQ6D,SAAS,GAAK,MAG3EmF,EAASI,eAAe,UAC3BvJ,EAAKG,QAAQ6B,KAAOmH,EAASnH,MAGQ,gBAA3BhC,GAAKG,QAAQ4D,UAEtB/D,EAAKG,QAAQ4D,UADiB,QAA3B/D,EAAKG,QAAQ4D,WACU,GAAI9B,cAIzB,IAAI2H,MAAMC,QAAQ7J,EAAKG,QAAQ4D,WAAY,CACjD,GAAIqE,GAAIpI,EAAKG,QAAQ4D,UAAU4F,QAAQ,MAC7B,MAANvB,IACHpI,EAAKG,QAAQ4D,UAAU+F,OAAO1B,EAAG,GACjCpI,EAAKG,QAAQ4D,UAAUgG,KAAK,GAAI9H,QASlC,MAAOlC,MAQTD,YAAWkK,WAYVpF,QAAU,SAAStE,EAAG2J,GACrB,MAAoC,kBAAzB1H,MAAKpC,QAAQyE,QAChBrC,KAAKpC,QAAQyE,QAAQtE,EAAG2J,IAE/BR,QAAQC,IAAI,qDACL,IAOT9H,UAAY,WACX,MAAwC,kBAA5BW,MAAKpC,QAAiB,UAC1BoC,KAAKpC,QAAQyB,aAEpB6H,QAAQC,IAAI,uDACL,IAOTpH,WAAa,WACZ,MAAyC,kBAA7BC,MAAKpC,QAAkB,WAC3BoC,KAAKpC,QAAQmC,cAEpBmH,QAAQC,IAAI,wDACL,IAST5E,wBAAyB,SAAS1E,GACjC,GAAsD,kBAA1CmC,MAAKpC,QAA+B,wBAAkB,CACjE,GAAI2C,GAAYP,KAAKL,aAAa9B,EAClC,OAAOmC,MAAKpC,QAAQ2E,wBAAwBhC,EAAUoH,QAASpH,EAAUV,OAGzE,MADAqH,SAAQC,IAAI,qEACL,GAST7E,oBAAqB,SAASzE,GAC7B,GAAkD,kBAAtCmC,MAAKpC,QAA2B,oBAAkB,CAC7D,GAAI2C,GAAYP,KAAKL,aAAa9B,EAClC,OAAOmC,MAAKpC,QAAQ0E,oBAAoB/B,EAAUoH,QAASpH,EAAUV,OAGrE,MADAqH,SAAQC,IAAI,iEACL,GAITS,aAAc1J,GAAGgF,OAAO,MAExBoD,WAAY,SAASvI,EAAGmF,GAKvB,GAJWA,IAAAA,SACVA,EAAS,SAGY,kBAAXA,GACV,MAAOA,GAAOnF,EAEd,IAAI8J,GAAI3J,GAAG0F,KAAKV,OAAOA,EACvB,OAAO2E,GAAE9J,IAOXe,eAAgB,WACfkB,KAAKtC,SAAS8J,KAAKxH,KAAK8H,gBAAgB9J,WACxCgC,KAAKtC,SAASiK,QAEd3H,KAAKxB,MAAMwB,KAAK0E,gBAEhB1E,KAAKR,SACJQ,KAAKpC,QAAQ6B,KACb,GAAIC,MAAKM,KAAKtC,SAASsC,KAAKtC,SAASkC,OAAO,IAC5CI,KAAKL,aAAaK,KAAKtC,SAASsC,KAAKtC,SAASkC,OAAO,IAAIC,MACzDG,KAAKF,KAGNE,KAAKsC,oBAAoB,GAAI5C,MAAKM,KAAKtC,SAASsC,KAAKtC,SAASkC,OAAO,MAGtEZ,mBAAoB,WACnBgB,KAAKtC,SAASqK,QAAQ/H,KAAKgI,oBAAoBhK,WAC/CgC,KAAKtC,SAASmC,MAEdG,KAAKxB,MAAMwB,KAAKyE,eAEhBzE,KAAKR,SACJQ,KAAKpC,QAAQ6B,KACb,GAAIC,MAAKM,KAAKtC,SAAS,IACvBsC,KAAKL,aAAaK,KAAKtC,SAAS,IAAImC,MACpCG,KAAKF,KAGNE,KAAKuC,wBAAwB,GAAI7C,MAAKM,KAAKtC,SAAS,MAOrDuB,cAAe,SAASgJ,GAEvB,GAAIC,GAASlI,KACTkB,EAASlB,KAAK/B,IAElB,QAAO+B,KAAKpC,QAAQ0D,wBACnB,IAAK,MAAQJ,EAASA,EAAOwE,OAAO,MAAO,SAAW,MACtD,SAAUxE,EAASA,EAAO7C,OAAO,OAGlC,GAAI8J,GACHnI,KAAKpC,QAAQuD,gBAAkBnB,KAAKpC,QAAQsD,OAAOtB,OAAO,GAC1DI,KAAKpC,QAAQwD,mBAAqBpB,KAAKpC,QAAQsD,OAAOtB,OAAO,GAC7DI,KAAKpC,QAAQyD,aAAa,GAAKrB,KAAKpC,QAAQyD,aAAa,EAE1DH,GAASA,EACP5C,KAAK,QAAS,gBACdA,KAAK,SAAU0B,KAAKpC,QAAQuD,eAAiBnB,KAAKpC,QAAQyD,aAAa,GAAKrB,KAAKpC,QAAQyD,aAAa,IACtG/C,KAAK,QAAS2J,GACd5J,OAAO,KACPC,KAAK,YAAa,WAClB,OAAO4J,EAAOtK,QAAQ2D,0BACrB,IAAK,QAAU,MAAO,cAAgB0G,EAAaE,GAAe,GAClE,KAAK,SACL,IAAK,SAAW,MAAO,cAAgBF,EAAW,EAAIE,EAAY,GAAK,GACvE,SAAU,MAAO,aAAeD,EAAOtK,QAAQyD,aAAa,GAAK,OAGlE/C,KAAK,IAAK0B,KAAKpC,QAAQyD,aAAa,IACpCmE,YAAY/F,KAAKvB,GAAGgC,MAAM,EAAGF,KAAKpC,QAAQsD,OAAOtB,OAAO,GAE1D,IAAIwI,GAAalH,EACfuE,QACApH,OAAO,QACPC,KAAK,QAAS0B,KAAKpC,QAAQuD,gBAC3B7C,KAAK,SAAU0B,KAAKpC,QAAQuD,gBAC5B7C,KAAK,QAAS,SAASP,GAAI,MAAO,gBAAkBA,EAAE,KACtDO,KAAK,IAAK,SAASP,GACnB,MAAOA,IAAKmK,EAAOtK,QAAQuD,eAAiB+G,EAAOtK,QAAQwD,qBAE3D9C,KAAK,IAAK0B,KAAKpC,QAAQyD,aAAa,IACpC/C,KAAK,eAAgB,EAGvB8J,GAAW7B,aAAa8B,MAAM,SAAStK,EAAG8H,GAAK,MAAOqC,GAAOtK,QAAQwE,kBAAoByD,EAAE,KAAMvH,KAAK,eAAgB,GAEtH8J,EACE/J,OAAO,SACPgI,KAAK,SAAStI,GAEd,MADoBmK,GAAOtK,QAAQsD,OAAOnD,EAAE,GAClC,IAANA,EACKmK,EAAOtK,QAAQoE,kBAAuB,MAAEkB,QAC/CR,IAAKwF,EAAOtK,QAAQsD,OAAOnD,GAC3B4E,KAAMuF,EAAOtK,QAAQ6D,SAAS,KACrB1D,IAAMmK,EAAOtK,QAAQsD,OAAOtB,OAC9BsI,EAAOtK,QAAQoE,kBAAuB,MAAEkB,QAC/CkC,IAAK8C,EAAOtK,QAAQsD,OAAOnD,EAAE,GAC7B4E,KAAMuF,EAAOtK,QAAQ6D,SAAS,KAEvByG,EAAOtK,QAAQoE,kBAAuB,MAAEkB,QAC/CoF,KAAMJ,EAAOtK,QAAQsD,OAAOnD,EAAE,GAC9BwK,GAAIL,EAAOtK,QAAQsD,OAAOnD,GAC1B4E,KAAMuF,EAAOtK,QAAQ6D,SAAS,QAgBnC+G,QAAS,SAAS/I,EAAMa,GACvB,GAAI4H,GAASlI,IAgDb,OA/CAM,GAAOmI,KAAK,SAASC,GAEhBjJ,EAAKuH,eAAe0B,IACvBxK,GAAGC,OAAO6B,MAAMwF,UAAU,+BACxBlH,KAAK,QAAS,SAASP,GACvB,GAAI4K,GAAgBT,EAAOzF,YAAYyF,EAAOtK,QAAQ2C,WAAW8C,YAAYtF,GAEzE6K,EAAY,aAAeV,EAAOjC,sBAAsBlI,IAC3D0B,EAAKiJ,GAAY1B,eAAe2B,GAC/B,IAAMT,EAAOhH,OAAOzB,EAAKiJ,GAAYC,IAAmB,GAO1D,OAJ+B,QAA3BT,EAAOtK,QAAQyE,UAClBuG,GAAa,iBAGPA,IAEPlK,GAAG,QAAS,SAASX,GACrB,GAA+B,OAA3BmK,EAAOtK,QAAQyE,QAAkB,CACpC,GAAIsG,GAAgBT,EAAOzF,YAAYyF,EAAOtK,QAAQ2C,WAAW8C,YAAYtF,EAC7E,OAAOmK,GAAO7F,QACbtE,EACC0B,EAAKiJ,GAAY1B,eAAe2B,GAAiBlJ,EAAKiJ,GAAYC,GAAiB,SAItFxK,OAAO,SACPkI,KAAK,SAAStI,GACd,GAAI4K,GAAgBT,EAAOzF,YAAYyF,EAAOtK,QAAQ2C,WAAW8C,YAAYtF,EAE7E,OACC0B,GAAKiJ,GAAY1B,eAAe2B,IAAsD,OAApClJ,EAAKiJ,GAAYC,GAClET,EAAOtK,QAAQ+D,qBAA2B,OAAEuB,QAC5C2F,MAAOX,EAAON,aAAanI,EAAKiJ,GAAYC,IAC5ChG,KAAMuF,EAAOtK,QAAQ6D,SAA8C,IAApChC,EAAKiJ,GAAYC,GAAuB,EAAI,GAC3EvF,UAAW8E,EAAOzF,YAAYyF,EAAOtK,QAAQ2C,WAAW2C,OAAOE,UAC/DD,KAAM+E,EAAO5B,WAAWvI,EAAGmK,EAAOtK,QAAQkE,uBAE1CoG,EAAOtK,QAAQ+D,qBAA0B,MAAEuB,QAC3CC,KAAM+E,EAAO5B,WAAWvI,EAAGmK,EAAOtK,QAAQkE,4BAOzC,GAORoE,mBAAoB,SAASnI,GAC5B,GAAI+K,GAAQ9I,KAAKyC,YAAYzC,KAAKpC,QAAQ2C,WAAWK,SAASG,EAAEhD,EAChE,OAAO+K,GAAQ9I,KAAKpC,QAAQuC,SAAW2I,EAAQ9I,KAAKpC,QAAQwB,aAG7D+G,mBAAoB,SAASpI,GAC5B,GAAI+K,GAAQ9I,KAAKyC,YAAYzC,KAAKpC,QAAQ2C,WAAWK,SAASI,EAAEjD,EAChE,OAAO+K,GAAQ9I,KAAKpC,QAAQuC,SAAW2I,EAAQ9I,KAAKpC,QAAQwB,aAS7D6G,sBAAuB,SAASlI,GAE/B,GAAIiC,KAAKpC,QAAQ4D,UAAU5B,OAAS,EACnC,IAAK,GAAIiG,KAAK7F,MAAKpC,QAAQ4D,UAC1B,GAAIxB,KAAKpC,QAAQ4D,UAAUqE,YAAcnG,OAAQM,KAAK+I,YAAY/I,KAAKpC,QAAQ4D,UAAUqE,GAAI9H,GAC5F,MAAO,cAAgBiC,KAAKgJ,MAAMhJ,KAAKpC,QAAQ4D,UAAUqE,IAAM,OAAS,GAI3E,OAAO,IAURmD,MAAO,SAASjL,GACf,MAAOiC,MAAK+I,YAAYhL,EAAG,GAAI2B,QAYhCqJ,YAAa,SAASE,EAAQC,GAC7B,OAAOlJ,KAAKpC,QAAQ2C,WACnB,IAAK,QACL,IAAK,MACJ,MAAO0I,GAAOpF,gBAAkBqF,EAAOrF,eACtCoF,EAAOhF,aAAeiF,EAAOjF,YAC7BgF,EAAOzF,YAAc0F,EAAO1F,WAC5ByF,EAAOxF,aAAeyF,EAAOzF,YAC7BwF,EAAOhG,eAAiBiG,EAAOjG,YACjC,KAAK,SACL,IAAK,OACJ,MAAOgG,GAAOpF,gBAAkBqF,EAAOrF,eACtCoF,EAAOhF,aAAeiF,EAAOjF,YAC7BgF,EAAOzF,YAAc0F,EAAO1F,WAC5ByF,EAAOxF,aAAeyF,EAAOzF,UAC/B,KAAK,QACL,IAAK,MACJ,MAAOwF,GAAOpF,gBAAkBqF,EAAOrF,eACtCoF,EAAOhF,aAAeiF,EAAOjF,YAC7BgF,EAAOzF,YAAc0F,EAAO1F,SAC9B,KAAK,SACL,IAAK,OACL,IAAK,UACL,IAAK,QACJ,MAAOyF,GAAOpF,gBAAkBqF,EAAOrF,eACtCoF,EAAOhF,aAAeiF,EAAOjF,UAC/B,SAAU,OAAO,IAanBH,aAAe5F,GAAG0F,KAAKV,OAAO,MAO9Bc,cAAgB,SAASjG,GACxB,GAAI8J,GAAI7H,KAAKpC,QAAQ4C,qBAAsB,EAAOtC,GAAG0F,KAAKV,OAAO,MAAQhF,GAAG0F,KAAKV,OAAO,KACxF,OAAO2E,GAAE9J,IAIV2F,WAAa,SAAS3F,GACrB,MAAIiC,MAAKpC,QAAQ4C,qBAAsB,EAC/BzC,EAAEoL,SAEc,IAAfpL,EAAEoL,SACH,EAEDpL,EAAEoL,SAAS,GASnB5F,cAAgB,SAASxF,GAIxB,MAHiB,gBAANA,KACVA,EAAI,GAAI2B,MAAK3B,IAEP,GAAI2B,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAW,EAAG,IAQlDmF,cAAe,SAAUrL,EAAGmC,GAC3B,GAAImJ,EAEArJ,MAAKpC,QAAQ4C,qBAAsB,EACtC6I,EAAY,GAAI3J,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,UAAYzF,EAAEoL,UAEjD,IAAfpL,EAAEoL,SACLE,EAAY,GAAI3J,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,WAC7B,IAAfzF,EAAEoL,UACZE,EAAY,GAAI3J,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,WACtD6F,EAAUC,QAAQD,EAAU7F,UAAY,IAExC6F,EAAY,GAAI3J,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,UAAUzF,EAAEoL,SAAS,EAI7E,IAAII,GAAU,GAAI7J,MAAK2J,GAEnBG,EAAO,GAAI9J,MAAK6J,EAAQD,QAAQC,EAAQ/F,UAAoB,EAARtD,GAExD,OAAQF,MAAKpC,QAAQ4C,qBAAsB,EAC1CtC,GAAG0F,KAAK6F,QAAQ1G,KAAKL,IAAI2G,EAAWG,GAAOzG,KAAKqC,IAAIiE,EAAWG,IAC/DtL,GAAG0F,KAAK8F,QAAQ3G,KAAKL,IAAI2G,EAAWG,GAAOzG,KAAKqC,IAAIiE,EAAWG,KAIjEG,cAAe,SAAS5L,EAAGmC,GAC1B,GAAIrC,GAAQ,GAAI6B,MAAK3B,EAAE8F,cAAe,GAClC2F,EAAO,GAAI9J,MAAK3B,EAAE8F,cAAc3D,EAAO,EAE3C,OAAOhC,IAAG0F,KAAKgG,MAAM7G,KAAKL,IAAI7E,EAAO2L,GAAOzG,KAAKqC,IAAIvH,EAAO2L,KAQ7DK,gBAAiB,SAAU9L,EAAGmC,GAC7B,GAAIrC,GAAQ,GAAI6B,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,UAAWzF,EAAE0F,YAC/D+F,EAAO,GAAI9J,MAAK7B,EAAMG,UAAY,IAAYkC,EAElD,OAAOhC,IAAG0F,KAAKkG,QAAQ/G,KAAKL,IAAI7E,EAAO2L,GAAOzG,KAAKqC,IAAIvH,EAAO2L,KAQ/DO,cAAe,SAAUhM,EAAGmC,GAC3B,GAAIrC,GAAQ,GAAI6B,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,UAAWzF,EAAE0F,YAC/D+F,EAAOtJ,CAKX,OAJqB,gBAAVA,KACVsJ,EAAO,GAAI9J,MAAK7B,EAAMG,UAAY,KAAckC,IAG1ChC,GAAG0F,KAAKoG,MAAMjH,KAAKL,IAAI7E,EAAO2L,GAAOzG,KAAKqC,IAAIvH,EAAO2L,KAS7DS,aAAc,SAAUlM,EAAGmC,GAC1B,GAAIrC,GAAQ,GAAI6B,MAAK3B,EAAE8F,cAAe9F,EAAEkG,WAAYlG,EAAEyF,WAClDgG,EAAO,GAAI9J,MAAK7B,EAGpB,OAFA2L,GAAO,GAAI9J,MAAK8J,EAAKF,QAAQE,EAAKhG,UAAY0G,SAAShK,EAAO,MAEvDhC,GAAG0F,KAAKuG,KAAKpH,KAAKL,IAAI7E,EAAO2L,GAAOzG,KAAKqC,IAAIvH,EAAO2L,KAQ5DY,eAAgB,SAAUrM,EAAGmC,GAC5B,GAAIrC,GAAQ,GAAI6B,MAAK3B,EAAE8F,cAAe9F,EAAEkG,YACpCuF,EAAO,GAAI9J,MAAK7B,EAGpB,OAFA2L,GAAOA,EAAKa,SAASb,EAAKvF,WAAW/D,GAE9BhC,GAAG0F,KAAK0G,OAAOvH,KAAKL,IAAI7E,EAAO2L,GAAOzG,KAAKqC,IAAIvH,EAAO2L,KAG9D7L,UAAW,SAASwF,EAAMjD,GASzB,OARoB,gBAATiD,KACVA,EAAO,GAAIzD,MAAKyD,IAGNjD,IAAAA,SACVA,EAAQF,KAAKpC,QAAQsC,OAGfF,KAAKpC,QAAQ0C,QACnB,IAAK,OAAU,MAAON,MAAK+J,cAAc5G,EAAMjD,EAC/C,KAAK,MAAU,MAAOF,MAAKiK,aAAa9G,EAAMjD,EAC9C,KAAK,OAAU,MAAOF,MAAKoJ,cAAcjG,EAAMjD,EAC/C,KAAK,QAAU,MAAOF,MAAKoK,eAAejH,EAAMjD,EAChD,KAAK,OAAU,MAAOF,MAAK2J,cAAcxG,EAAMjD,KAIjDP,aAAc,SAASwD,GACF,gBAATA,KACVA,EAAO,GAAIzD,MAAKyD,GAGjB,IAAI+E,GAASlI,KAETuK,EAA0B,SAASpH,EAAM7C,GAC5C,OAAOA,GACN,IAAK,OAAS,MAAO4H,GAAOpE,aAAa,GAAIpE,MAAKyD,EAAKU,cAAc,EAAG,EAAG,GAC3E,KAAK,QACJ,GAAI2G,GAAiB,GAAI9K,MAAKyD,EAAKU,cAAeV,EAAKc,WAAW,EAAG,EACrE,OAAOuG,GAAehH,SACvB,KAAK,OAAS,MAAO,KAInBiH,EAA0B,SAAStH,EAAM7C,GAC5C,OAAQA,GACP,IAAK,OAAS,MAAO,GACrB,KAAK,MAAQ,MAAO,KACpB,KAAK,OAAS,MAAO,SAInBoK,EAA2B,SAASvH,EAAM7C,GAC7C,OAAOA,GACN,IAAK,MAAQ,MAAO,GACpB,KAAK,OAAS,MAAO,IACrB,KAAK,QACJ,GAAIqK,GAAa,GAAIjL,MAAKyD,EAAKU,cAAeV,EAAKc,WAAW,EAAG,EACjE,OAA8B,IAAvB0G,EAAWnH,YAIjBoH,EAA2B,SAASzH,EAAM7C,GAC7C,GAAe,UAAXA,EAAoB,CACvB,GAAIqK,GAAa,GAAIjL,MAAKyD,EAAKU,cAAeV,EAAKc,WAAW,EAAG,GAC7D4G,EAAY3C,EAAOlE,cAAc2G,GACjCG,EAAc5C,EAAOlE,cAAc,GAAItE,MAAKyD,EAAKU,cAAeV,EAAKc,YAOzE,OALI6G,GAAcD,IACjBC,EAAc,EACdD,KAGMA,EAAYC,EAAc,EAC3B,MAAe,SAAXxK,EACH4H,EAAOlE,cAAc,GAAItE,MAAKyD,EAAKU,cAAe,GAAI,KADvD,OAMR,QAAO7D,KAAKpC,QAAQ2C,WACnB,IAAK,QACL,IAAK,MAAU,MAAOP,MAAK6J,gBAAgB1G,EAAMsH,EAAwBtH,EAAMnD,KAAKpC,QAAQ0C,QAC5F,KAAK,SACL,IAAK,OAAU,MAAON,MAAK+J,cAAc5G,EAAMuH,EAAyBvH,EAAMnD,KAAKpC,QAAQ0C,QAC3F,KAAK,QACL,IAAK,MAAU,MAAON,MAAKiK,aAAa9G,EAAMoH,EAAwBpH,EAAMnD,KAAKpC,QAAQ0C,QACzF,KAAK,OAAU,MAAON,MAAKoJ,cAAcjG,EAAMyH,EAAyBzH,EAAMnD,KAAKpC,QAAQ0C,QAC3F,KAAK,UACL,IAAK,QAAU,MAAON,MAAKoK,eAAejH,EAAM,MAIlD2E,cAAe,WACd,MAAO9H,MAAKrC,UAAUqC,KAAKtC,SAASsC,KAAKtC,SAASkC,OAAO,GAAI,GAAGC,OAGjEmI,kBAAmB,WAClB,MAAOhI,MAAKrC,UAAUqC,KAAKtC,SAAS,GAAI,IAAI,IAS7CwD,OAAQ,SAAS6J,GAEhB,GAAIC,MAAMD,GACT,MAAO,IACD,IAAU,OAANA,EACV,MAAO,EAGR,KAAK,GAAIlF,GAAI,EAAGoF,EAAQjL,KAAKpC,QAAQsD,OAAOtB,OAAO,EAAQqL,GAALpF,EAAYA,IAAK,CAEtE,GAAU,IAANkF,GAAW/K,KAAKpC,QAAQsD,OAAO,GAAK,EACvC,MAAO,EACD,IAAIlB,KAAKpC,QAAQsD,OAAO,GAAK,GAAS,EAAJ6J,EACxC,MAAO,IAGR,IAAS/K,KAAKpC,QAAQsD,OAAO2E,IAAzBkF,EACH,MAAO,KAAOlF,EAAE,GAGlB,MAAO,KAAO7F,KAAKpC,QAAQsD,OAAOtB,OAAS,IAU5CL,KAAM,SAAS2L,EAAO5K,GACrB,MAAI4K,MAAU,GAASA,KAAU,GACA,OAA5BlL,KAAKpC,QAAQmC,YAAuBC,KAAKuE,cAAe,IAC3DvE,KAAKD,aACLC,KAAKuE,YAAa,GAEZvE,KAAKwI,QAAQxI,KAAKmL,WAAWD,GAAQ5K,KAEtC,GAMRd,SAAU,SAAS4L,EAAQC,EAAW9B,EAASjJ,GAC9C,GAAI4H,GAASlI,IAMb,QAJWM,IAAAA,SACVA,EAAS4H,EAAOpI,WAGHsL,IACb,IAAK,SACJ,GAAe,KAAXA,EACH,OAAO,CAGP,IAAIE,GAAW,SAAS7L,GACvByI,EAAO3I,KAAKE,EAAMa,GAGnB,QAAON,KAAKpC,QAAQ6C,UACnB,IAAK,OACJvC,GAAGqN,KAAKvL,KAAKwL,SAASJ,EAAQC,EAAW9B,GAAU+B,EACnD,MACD,KAAK,MACJpN,GAAGuN,IAAIzL,KAAKwL,SAASJ,EAAQC,EAAW9B,GAAU+B,EAClD,MACD,KAAK,MACJpN,GAAGwN,IAAI1L,KAAKwL,SAASJ,EAAQC,EAAW9B,GAAU+B,EAClD,MACD,KAAK,OACJpN,GAAGmI,KAAKrG,KAAKwL,SAASJ,EAAQC,EAAW9B,GAAU,aAAc+B,GAInE,OAAO,CAGT,KAAK,SAEJ,MAAOpD,GAAO3I,KAAK6L,EAAQ9K,GAG7B,OAAO,GASR6K,WAAY,SAAS1L,GACpB,GAAIkM,KAEJ,IAA4C,kBAAhC3L,MAAKpC,QAAqB,cAIrC,MADAsJ,SAAQC,IAAI,4DAFZ1H,GAAOO,KAAKpC,QAAQ4E,cAAc/C,EAMnC,KAAK,GAAI1B,KAAK0B,GAAM,CACnB,GAAI0D,GAAO,GAAIzD,MAAO,IAAF3B,GAChB2K,EAAa1I,KAAKrC,UAAUwF,GAAM,GAAGnF,SAGzC,MAAwC,EAApCgC,KAAKtC,SAAS0J,QAAQsB,IAA1B,CAIA,GAAIC,GAAgB3I,KAAKyC,YAAYzC,KAAKpC,QAAQ2C,WAAW8C,YAAYF,EAC9DwI,GAAMjD,KAANiD,SACVA,EAAMjD,OAGIiD,EAAMjD,GAAYC,KAAlBgD,OACVA,EAAMjD,GAAYC,IAAkBlJ,EAAK1B,GAEzC4N,EAAMjD,GAAYC,GAAiBlJ,EAAK1B,IAI1C,MAAO4N,IAGRH,SAAU,SAASI,EAAKP,EAAW9B,GASlC,MAPAqC,GAAMA,EAAIC,QAAQ,mBAAoBR,EAAUrN,UAAU,KAC1D4N,EAAMA,EAAIC,QAAQ,iBAAkBtC,EAAQvL,UAAU,KAGtD4N,EAAMA,EAAIC,QAAQ,mBAAoBR,EAAUS,eAChDF,EAAMA,EAAIC,QAAQ,iBAAkBtC,EAAQuC,gBAS7CC,KAAM,WACL,MAAO/L,MAAKlB,kBAGbkN,SAAU,WACT,MAAOhM,MAAKhB,sBAGbiN,OAAQ,WAcP,IAAK,GAbDC,IACHC,YACAC,iBACAC,oBACAC,cACAC,oBACAC,cACAC,wBACAC,kBACAC,qBACAC,UAGQC,EAAI,EAAG5B,EAAQjL,KAAKpC,QAAQsD,OAAOtB,OAAYqL,EAAJ4B,EAAWA,IAC9DX,EAAO,KAAOW,KAGf,IAAI5O,GAAO+B,KAAK/B,KAEZ6O,GAEH,SAAU,eAAgB,iBAAkB,mBAAoB,oBAAqB,iBAAkB,oBACvG,OAAQ,eAAgB,YACxB,SAAU,eAAgB,aAAc,aACxC,sBAAuB,iBAAkB,oBAAqB,+BAAgC,6BAA8B,UAAW,cACvI,kBAGA,iBAAkB,cAAe,OAAQ,YAAa,eAGnDC,EAAe,SAASC,EAAWC,EAAUC,GACN,KAAtCJ,EAAgB1F,QAAQ6F,KAC3Bf,EAAOc,GAAWC,GAAYC,IAI5BC,EAAa,SAAS7P,GACzB,MAAOW,GAAKE,OAAOb,GAAG,GAAG,GAG1B,KAAK,GAAI8P,KAAWlB,GAAQ,CAE3B,GAAImB,GAAMF,EAAWC,EAErB,IAAY,OAARC,EAKJ,GAAI,oBAAsBC,QAAQ,CACjC,GAAIC,GAAKC,iBAAiBH,EAAK,KAC/B,IAAkB,IAAdE,EAAG3N,OACN,IAAK,GAAIiG,GAAI,EAAO0H,EAAG3N,OAAPiG,EAAeA,IAC9BkH,EAAaK,EAASG,EAAGE,KAAK5H,GAAI0H,EAAGG,iBAAiBH,EAAGE,KAAK5H,SAM/D,KAAK,GAAI8H,KAAKJ,GACTA,EAAGvG,eAAe2G,IACrBZ,EAAaK,EAASO,EAAGJ,EAAGI,QAMzB,IAAI,gBAAkBN,GAAK,CACjC,GAAIO,GAAMP,EAAIQ,YACd,KAAK,GAAI1Q,KAAKyQ,GACbb,EAAaK,EAASjQ,EAAGyQ,EAAIzQ,KAOhC,GAAI2Q,GAAS,sHAGb,KAAK,GAAIC,KAAS7B,GAAQ,CACzB4B,GAAUC,EAAQ,MAClB,KAAK,GAAIC,KAAK9B,GAAO6B,GACpBD,GAAU,IAAOE,EAAI,IAAM9B,EAAO6B,GAAOC,GAAK,KAE/CF,IAAU,MAQX,MALAA,IAAU,cACVA,IAAU,GAAIG,gBAAgBC,kBAAkBlO,KAAK/B,KAAKuH,UAAU,OAAO,GAAG,IAC9EsI,IAAU,GAAIG,gBAAgBC,kBAAkBlO,KAAK/B,KAAKuH,UAAU,OAAO,GAAG,IAC9EsI,GAAU,WAWZK,OAAO1G,UAAUvE,OAAS,WACzB,GAAIkL,GAAYpO,IAChB,KAAK,GAAIqO,KAAQC,WAAU,GAAI,CAC9B,GAAIC,GAAaC,OAAO,MAAQH,EAAO,MAAO,KAC9CD,GAAYA,EAAUvC,QAAQ0C,EAAQD,UAAU,GAAGD,IAEpD,MAAOD,IA4Bc,kBAAXK,SAAyBA,OAAOC,KAC1CD,QAAQ,MAAO,WACd,MAAOlR"}