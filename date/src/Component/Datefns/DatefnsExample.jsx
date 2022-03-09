import React, {useRef, useState} from 'react';
import {add, addWeeks, differenceInHours, format, sub} from "date-fns";  //사용할 서비스만 가져다 씀
import {ko} from "date-fns/locale"; //사용할 locale import
import {format as timezoneFormat, toDate} from "date-fns-tz"; //date-fns-tz의 format을 timezoneFormat이라는 이름으로 쓰겠다.

function DatefnsExample() {
  const birthdayRef = useRef(null);
  const [birthday, setbirthDay] = useState("");
  const handleBirthdayChange = (event) =>{
    setbirthDay(format(
        new Date(event.target.value),
        "EEEE",   //요일을 나타내는 format은 "EEEE"
        {locale: ko})); //format에서 option으로 locale도 지정해줄 수 있음
  }

  const datefnsDate = new Date();  //native에 있는 Date를 그대로 가져다 씀
  const newDatefnsDate = add(datefnsDate, {weeks: 1})   //1주일 더하기 (datefns는 immutable하므로 dayjsDate는 그대로일 것임)
  const newDatefnsDate2 = addWeeks(newDatefnsDate, 1)  //이런함수도 제공해줌 1주일을 더해줄 수도 있음g
  //add를 import하지 않고 addWeeks만 import해서 size를 작게 가져갈 수 있음 (tree shaking)
  return (
      <div>
        <h1>date-fns</h1>
        <hr/>
        <div>
          <h3>Immutable check</h3>
          <h5>
            {format(datefnsDate, "yyyy-MM-dd")}   {/*format사용법이 조금 다르고 M만 대문자로 사용*/}
            <br/>
            {format(newDatefnsDate, "yyyy-MM-dd")}
            <br/>
            {format(newDatefnsDate2, "yyyy-MM-dd")}
          </h5>
          <br/>
        </div>
        <div>
        <h1>Summer Time (New-york)</h1>
        <h3> 2018년 3월 10일 13시에 하루 더하기:
          {timezoneFormat(
              add(
                  toDate(new Date("2018-03-10 13:00:00"), {
                    timeZone: 'America/New_York'  /*add 내부에서 연산에 쓰이는 date자체의 timezone도 바꿔줄 수 있음 (format에서 timezone 설정은 따로)*/
                  }),
                  {days: 1}
              ),
              "yyyy-MM-dd HH:mm:ssXXX",
              {timeZone: 'America/New_York'})}  {/*timezone의 format은 option으로 timezone을 설정해서 display되는 date의 timezone을 설정*/}
          {/*HH:mm:ssXXX : 시:분:초 timezone(ex.-05:00)*/}
        </h3>
        <h3> 2018년 3월 10일 13시에 24시간 더하기:
          {timezoneFormat(
              add(new Date("2018-03-10 13:00:00"), {hours: 24}),
              "yyyy-MM-dd HH:mm:ssXXX",
              {timeZone: 'America/New_York'})}
        </h3>
        {/*day.js처럼 imezone을 변경해서 맞춰준다.*/}
        </div>
        <br/>
        <div>
          <h1>Leap year (Korea)</h1>
          <h3> 2017년 1월 1일에 1년 빼기:
            {format(
                sub(new Date("2017-01-01"), {years: 1}),
                "yyyy-MM-dd")}
            {/*date-fns는 객체가 아니라 function이다! 날짜를 사용하려면 Date객체를 만들어줘야한다*/}
          </h3>
          <h3> 2017년 1월 1일에 365일 빼기:
            {format(
                sub(new Date("2017-01-01"), {days: 365}),
                "yyyy-MM-dd")}
          </h3>
          {/*윤년은 366일이기 때문에 1년을 빼면 정상으로 나오지만 365일을 빼면 1일 밀려서 나온다.*/}
        </div>
        <br/>
        <div>
          <h1>날짜를 한국어로 표기 (07-17-2021을 2021년 7월 17일로 표기)</h1>
          <h3>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</h3> {/*원하는대로 포맷을 먹여줄 수 있다 (MM월 DD일하면 07월 07일 이런 식으로)*/}
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
          <h5>{`${differenceInHours(
              new Date("2022-03-09 19:00"),
              new Date("2022-03-10 06:00"))}
              시간 차이`}</h5>
          {/*시간 비교는 differenceInHours(dateLeft, dateRight) - Hours말고 다른 함수들도 있음*/}
        </div>
      </div>
  );
}

export default DatefnsExample;