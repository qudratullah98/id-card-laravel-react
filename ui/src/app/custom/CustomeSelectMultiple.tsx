import Select from 'react-select'
import { custom_select_type } from './_module'
const CustomeSelectMultiple = ({
  onChange,
  options,
  value,
  className,
  isLoading,
  isLoadTrueFalse,
}: any) => {
  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.id === value) : ''
  }
  return (
    <div className={className}>
      <Select
        placeholder={'Select'}
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value ? value : '')
        }}
        options={options}
        getOptionLabel={(options: custom_select_type) => options.name}
        getOptionValue={(options: custom_select_type) => options.id}
        backspaceRemovesValue={true}
        isMulti={true}
        isLoading={isLoadTrueFalse ? isLoading : false}
        isClearable={true}
      />
    </div>
  )
}
export default CustomeSelectMultiple
