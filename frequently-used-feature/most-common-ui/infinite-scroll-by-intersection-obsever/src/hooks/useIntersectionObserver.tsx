//대상이 되는 엘리먼트와 inersection observer로 전달될 option을 받아서 entry값을 return해주는 custom hook
import {RefObject, useState, useEffect} from "react";

function useIntersectionObserver(
    targetRef: RefObject<Element>,
    options: IntersectionObserverInit = {
      threshold: 0,
      root: null,
      rootMargin: '0px'
    }
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const isIntersecting = entry?.isIntersecting;

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setEntry(entry);
  }

  useEffect(() => {
    const target = targetRef?.current

    if (isIntersecting || !target) return; //겹치는 부분이 있거나 target이 없으면 return

    const observer = new IntersectionObserver(updateEntry, options) //그렇지 않으면 새 IntersectionObserver 생성

    observer.observe(target); //target을 관찰
    return () => { //clean
      observer.disconnect();
    }
  }, [targetRef, options.root, options.rootMargin, options.threshold, isIntersecting]);

  return entry
}

export default useIntersectionObserver