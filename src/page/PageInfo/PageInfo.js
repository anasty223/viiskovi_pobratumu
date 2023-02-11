import React from "react";
import {
  HeaderInfo,
  ContainerInfo,
  SpanInfo,
  HeaderInfoAdd,
  ContainerAdditional,
} from "./PageInfo.style.js";

const PageInfo = () => {
  return (
    <ContainerInfo>
      <HeaderInfo id="section1">
        Військові побратими-це фонд, який займається допомогою за потребою.
        Обов"язок кожного українця-це поміч та плече підтримки людям, які
        захищають нашу Батьківщину. В пустелі одна крапля води має значення. У
        фонді кожна гривня-це крок вирішення потреб побратимів.
      </HeaderInfo>
      <ContainerAdditional>
        <HeaderInfoAdd>
          <SpanInfo>40+ </SpanInfo> військовим допомогли
        </HeaderInfoAdd>
        <HeaderInfoAdd>
          <SpanInfo>50000+ </SpanInfo> гривень витрачено
        </HeaderInfoAdd>
        <HeaderInfoAdd>
          <SpanInfo>10+ </SpanInfo> залучено спеціалістів
        </HeaderInfoAdd>
      </ContainerAdditional>
      <HeaderInfo>
        І це тільки початок роботи фонду "Військові побратими". У перспективі
        плануються розширення меж та збільшення обсягів помічі військовим.
      </HeaderInfo>
    </ContainerInfo>
  );
};

export default PageInfo;
