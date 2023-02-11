import React from "react";
import { HeaderInfo,ContainerInfo } from "./PageInfo.style.js";

const PageInfo = () => {
  return (
    <ContainerInfo>
      <HeaderInfo>
        Військові побратими-це фонд, який займається допомогою за потребою.
        Обов"язок кожного українця-це поміч та плече підтримки людям, які
        захищають нашу Батьківщину. В пустелі одна крапля води має значення. У
        фонді кожна гривня-це крок вирішення потреб побратимів.
      </HeaderInfo>

      <h2><span>40 +  </span>  військовим допомогли</h2>
      <h2><span>50 000 +  </span> гривень витрачено</h2>
      <h2><span>10 +  </span> гривень витрачено</h2>
    </ContainerInfo>
  );
};

export default PageInfo;
