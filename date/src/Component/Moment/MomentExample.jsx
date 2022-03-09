import React, {useRef, useState} from 'react';
import moment from "moment-timezone";
import "moment/locale/ko";  //요일 같은 것을 한국어로 나오게 함

function MomentExample() {
  const birthdayRef = useRef(null);
  const [birthday, setbirthDay] = useState("");
  const handleBirthdayChange = (event) =>{
    setbirthDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
    //"YYYY-MM-DD"로 데이터가 어떤 포맷으로 오는지 알려줌, format에 dddd를 먹이면 요일을 가져옴
  }

  const momentDate = moment();  //지금 시간을 가져옴
  const newMomentDate = momentDate.add(1, "week");   //1주일 더하기 (moment는 mutable하므로 momentDate도 바뀔 것임)
  const cloneNewMomentDate = newMomentDate.clone().add(1,"week"); //clone을 사용했기 때문에 newMomewntDate는 그대로일 것임
  return (
      <div>
        <h1>Moment</h1>
        <hr/>
        <div>
          <h3>Immutable check</h3>
          <h5>
            {momentDate.format()}   {/*format을 사용해야 우리가 원하는 모양으로 보여짐 (기본 포맷 : 2022-03-16T19:58:56+09:00*/}
            <br/>
            {newMomentDate.format()}
            <br/>
            {cloneNewMomentDate.format()}
          </h5>
          <br/>
        </div>
        <div>
        <h1>Summer Time (New-york)</h1>
        <h3> 2018년 3월 10일 13시에 하루 더하기:
           {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}  {/*timezone을 Newyork으로*/}
        </h3>
        <h3> 2018년 3월 10일 13시에 24시간 더하기:
           {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
        </h3>
        {/* 서머타임에 시간을 1시간을 미는 것을 moment가 처리해줘서 하루를 더하면 13시로 정상 출력되시만 24시간을 더하면 14시로 1시간이 밀려서 출력됨*/}
        </div>
        <br/>
        <div>
          <h1>Leap year (Korea)</h1>
          <h3> 2017년 1월 1일에 1년 빼기:
            {moment.tz("2017-01-01", "Asia/Seoul").subtract(1, "year").format()}
          </h3>
          <h3> 2017년 1월 1일에 365일 빼기:
            {moment("2017-01-01").subtract(365, "day").format()} {/*timezone을 안 정해주면 자동으로 내 local로 설정됨 */}
          </h3>
          {/*윤년은 366일이기 때문에 1년을 빼면 정상으로 나오지만 365일을 배면 1일 밀려서 나온다.*/}
        </div>
        <br/>
        <div>
          <h1>날짜를 한국어로 표기 (07-17-2021을 2021년 7월 17일로 표기)</h1>
          <h3>{moment("07-17-2021").format("YYYY년 M월 D일")}</h3> {/*원하는대로 포맷을 먹여줄 수 있다 (MM월 DD일하면 07월 07일 이런 식으로)*/}
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
          <h5>{`${moment("2022-03-09 19:00").diff(moment("2022-03-10 06:00"), "hours")}시간 차이`}</h5>
        {/*moment에서 diff안의 moment를 뺀 시간으로 차이를 알려줌*/}
        </div>
      </div>
  );
}

export default MomentExample;