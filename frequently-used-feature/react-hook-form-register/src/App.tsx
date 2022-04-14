import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Form {
  age: number;
}

function App() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [result, setResult] = useState<string>();

  const onSubmit = (data: any) => {
    setResult(JSON.stringify(data));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
            type="number"
            placeholder="Age"
            {...register("age", { required: true, min: 17 })}
        />{/*필수값, 최소값은 17*/}
        {errors.age?.type === "required" && (
            <span className="error">Age is required</span> /*age는 필수값*/
        )}
        {errors.age?.type === "min" && (
            <span className="error">Minimum Age is 17</span>  /*나이가 최솟값보다 낮을 때*/
        )}
        <input type="submit" />
        <p>{result}</p>
      </form>
  );
}

export default App;

