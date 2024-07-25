import { Switch, Label, Field } from '@headlessui/react'
interface Props {
    label: string,
    filedName: string
    checked: boolean
    onChange: (fieldName: string, checked: boolean) => void;
}
export default function MySwitch({ label, onChange, checked, filedName }: Props) {
    return (
        <Field>
            <Label>{ label }</Label>
            <Switch
                checked={checked}
                onChange={(checked) => onChange(filedName, checked)}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
            >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
        </Field>

    )
}