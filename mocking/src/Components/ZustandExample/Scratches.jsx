import React, {useEffect, useRef} from 'react';
import create from "zustand";

const useStore = create((set) => ({
    scratches: 0,
    addScratches: () => set((state) => ({scratches: state.scratches + 1})),
}));

//add scratch 버튼 누를 때마다 scratches가 증가하는 component
//re-render하지 않고 scratch만 증가하게 만들자
function Scratches() {
    // const scratches = useStore((state) => state.scratches) - 기존에 사용하던 방법
    const scratchRef = useRef(useStore.getState().scratches);   //Ref에 scratches를 담음
    const addScratches = useStore((state) => state.addScratches)

    //scratches가 변함에 따라 scratchRef도 업데이트하도록 해주자
    useEffect(() => {
        useStore.subscribe( //subscribe의 첫번째 인수는 실행할 동작, 두번째 인수는 어떤 변경이 있을 때 실행하겠는가의 조건
            (scratches) => {
                scratchRef.current = scratches  //scratchRef.current에 scratches를 주입해서 업데이트
                console.log(`scratches: ${scratches}`)
                console.log(`scratchRef: ${scratchRef.current}`)
            },
            (state) => state.scratches  //scratches가 변경되었을 때 실행
        )
    }, []);

    return (
        <>
            <div>{scratchRef.current}</div>
            <br/>
            <button onClick={addScratches}>add scratch</button>
        </>
    );
}

export default Scratches;