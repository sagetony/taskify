import React, {useRef} from "react"
interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void

}
const InputField: React.FC <Props> = ({todo, setTodo, addTodo}) => {
const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <form action=""className="input" onSubmit={(e) => {
                addTodo(e)
                inputRef.current?.blur();
                }}>
                <input ref={inputRef} type="input"  value={todo} placeholder="Search"  className="input__box" onChange={(e)=>{
                    setTodo(e.target.value)
                }}/>
                <button type="submit" className="input_submit">Go</button>
            </form>
          
        </div>
    )
}

export default InputField;