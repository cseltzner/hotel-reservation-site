import * as Select from "@radix-ui/react-select";
import styles from "./FormSelect.module.scss";
import ChevronDown from "../Icons/ChevronDown.tsx";

export interface SelectItem {
    value: string;
    displayValue: string;
}

interface Props {
    onValueChange: (value: string) => void;
    isTouched: boolean;
    selectTriggerValue: string;
    selectItems: SelectItem[]
}

const FormSelect = (props: Props) => {
    return (
        <div className={styles.select}>
            <label htmlFor="guests">Guests</label>
            <Select.Root defaultValue={"1"} onValueChange={props.onValueChange}>
                <Select.Trigger
                    className={`${styles.dropdownTrigger} ${props.isTouched && styles.dropdownTriggerTouched}`}>
                    <Select.Value>{props.selectTriggerValue}</Select.Value>
                    <span className={styles.chevron}><ChevronDown/></span>
                </Select.Trigger>
                <Select.Content className={styles.selectContent} position="popper">
                    <Select.Viewport>
                        {props.selectItems.map(item => (
                            <Select.Item value={item.value} className={styles.selectItem}>{item.displayValue}</Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Root>
        </div>
    )
        ;
};

export default FormSelect;