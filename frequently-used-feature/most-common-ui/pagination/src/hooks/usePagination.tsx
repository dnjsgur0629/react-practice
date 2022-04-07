interface Props {
  count: number;  //전체 페이지 갯수
  page: number;   //현재 페이지
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;  //현재 페이지 전후에 표시되는 페이지 수
  boundaryCount?: number; //시작과 끝에서 항상 표시되는 페이지 수
}

const usePagination = ({
                         count,
                         page,
                         onPageChange,
                         disabled,
                         siblingCount = 1,
                         boundaryCount = 1
                       }: Props) => {
  //시작과 끝을 지정했을 때 사이에 해당하는 값들을 배열로 반환해주는 함수
  // ex range(2,5) = [2,3,4,5]
  const range = (start: number, end: number) => {
    const length = end - start + 1;

    return Array.from({length}).map((_, index) => index + start);
  }

  const startPage = 1;
  const endPage = count;

  const startPages = range(startPage, Math.min(boundaryCount, count));  //1, 2, ... 6, 7, 8, ... 99,100 에서 1,2
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);  // 99, 100

  const siblingStart = Math.max(  //6
      Math.min(
          page + 1 - siblingCount,
          count - boundaryCount - siblingCount * 2 - 1
      ),
      boundaryCount + 2
  );

  const siblingEnd = Math.min(  //8
      Math.max(
          page + 1 + siblingCount,
          boundaryCount + siblingCount * 2 + 2,
      ),
      endPages.length > 0 ? endPages[0] - 2 : endPage - 1
  );

  const itemList = [
    'prev',
    ...startPages,
    ...(siblingStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
    ...range(siblingStart, siblingEnd),
    ...(siblingEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []),
    ...endPages,
    'next',
  ]

  const items = itemList.map((item, index) => (
      //itemList에서 받은 item의 type이 number이면 페이지 버튼일 것이고 아니라면 prev,next 버튼이거나 ellipsis(생략)일 것이다.
      typeof item === 'number' ? {
        //page 번호일 때
        key: index,
        onClick: () => onPageChange(item - 1),
        disabled,
        selected: item - 1 === page,
        item
      } : {
        //page 번호가 아닐 때
        key: index,
        onClick: () => onPageChange(item === 'next' ? page + 1 : page - 1),
        disabled: disabled || item.indexOf('ellipsis') > -1 || (item === 'next' ? page >= count - 1 : page - 1 < 0),
        selected: false,
        item,
      }
  ));

  return {items,};
}

export default usePagination
