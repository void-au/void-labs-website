
interface Props {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: string) => void;
}

export const Input = (props: Props) => {

    return (
        <div className="input-wrapper">
            {props.label && <label>{props.label}</label>}
            <input
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: any) => props.onChange && props.onChange(e.target.value)}
            />
        </div>
    )

}