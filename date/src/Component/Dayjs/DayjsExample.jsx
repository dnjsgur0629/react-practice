import React, {useRef, useState} from 'react';
import dayjs from "dayjs";
import "dayjs/locale/ko"; //요일 같은 것을 한국어로 나오게 할 수 있는 라이브러리
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"  //uts와 timezone을 plugin에서 가져옴

dayjs.locale("ko"); //local을 세팅까지 해줘야 한국어로 나옴

//timezone 변경
dayjs.extend(utc);
dayjs.extend(timezone);

function DayjsExample() {
  const birthdayRef = useRef(null);
  const [birthday, setbirthDay] = useState("");
  const handleBirthdayChange = (event) =>{
    setbirthDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
    //"YYYY-MM-DD"로 데이터가 어떤 포맷으로 오는지 알려줌, format에 dddd를 먹이면 요일을 가져옴
  }

  const dayjsDate = dayjs();  //지금 시간을 가져옴
  const newDayjsDate = dayjsDate.add(1, "week");   //1주일 더하기 (dayjs는 immutable하므로 dayjsDate는 그대로일 것임)
  const cloneNewDayjsDate = newDayjsDate.add(1,"week");
  return (
      <div>
        <h1>Day.js</h1>
        <hr/>
        <div>
          <h3>Immutable check</h3>
          <h5>
            {dayjsDate.format()}   {/*format을 사용해야 우리가 원하는 모양으로 보여짐 (기본 포맷 : 2022-03-16T19:58:56+09:00*/}
            <br/>
            {newDayjsDate.format()}
            <br/>
            {cloneNewDayjsDate.format()}
          </h5>
          <br/>
        </div>
        <div>
        <h1>Summer Time (New-york)</h1>
          <div>변경하기 전 timezone: {dayjs.tz.guess()}</div>   {/*현재 설정되어있는 timezone*/}
        <h3> 2018년 3월 10일 13시에 하루 더하기:
           {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}  {/*timezone을 Newyork으로*/}
        </h3>
        <h3> 2018년 3월 10일 13시에 24시간 더하기:
           {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
        </h3>
        {/*moment는 서머타임을 고려해서 시간을 다르게 계산해줬다면 day.js는 아예 timezone을 변경해서 맞춰준다.
        따라서 이번엔 하루를 더한 것과 24시간을 더한 것이 같은 결과가 나오게 된다.*/}
        </div>
        <br/>
        <div>
          <h1>Leap year (Korea)</h1>
          <h3> 2017년 1월 1일에 1년 빼기:
            {dayjs("2017-01-01").subtract(1, "year").format()}
          </h3>
          <h3> 2017년 1월 1일에 365일 빼기:
            {dayjs("2017-01-01").subtract(365, "day").format()}
          </h3>
          {/*윤년은 366일이기 때문에 1년을 빼면 정상으로 나오지만 365일을 빼면 1일 밀려서 나온다.*/}
        </div>
        <br/>
        <div>
          <h1>날짜를 한국어로 표기 (07-17-2021을 2021년 7월 17일로 표기)</h1>
          <h3>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</h3> {/*원하는대로 포맷을 먹여줄 수 있다 (MM월 DD일하면 07월 07일 이런 식으로)*/}
        </div>
        <br/>
        <div>
          <h1>날짜를 고르면 그 날의 요일 알려주기</h1>
          <input type="date" ref={birthdayRef} onChange={handleBirthdayChange}/>
          <br/>
          <br/>
          <h3>무슨 요일이었을까? --- {birthday}</h3>
        </div>
        <br/>
        <div>
          <h1>두 날짜 비교</h1>
          <h3>2022-03-09 19:00 와 2022-03-10 06:00는 몇시간 차이인가?</h3>
          <h5>{`${dayjs("2022-03-09 19:00").diff("2022-03-10 07:00", "hours")}시간 차이`}</h5>
        </div>
      </div>
  );
}

export default DayjsExample;