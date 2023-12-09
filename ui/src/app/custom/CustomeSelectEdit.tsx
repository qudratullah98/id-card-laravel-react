import Select from 'react-select'
import { custom_select_type } from './_module'
const CustomeSelectEdit = ({
  onChange,
  options,
  value,
  className,
  isLoading,
  isLoadTrueFalse,
}: any) => {
  const defaultValue = (options: any, value: number) => {
    return options ? options.find((option: any) => option.name === value) : ''
  }
  return (
    <div className={className}>
      <Select
        placeholder={'Please Select'}
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value ? value : 0)
        }}
        options={options}
        getOptionLabel={(options: custom_select_type) => options.name}
        getOptionValue={(options: custom_select_type) => options.id}
        backspaceRemovesValue={true}
        isLoading={isLoadTrueFalse ? isLoading : false}
        isClearable={true}
      />
    </div>
  )
}

export default CustomeSelectEdit
