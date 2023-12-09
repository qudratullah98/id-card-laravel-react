import Select from 'react-select'
import {custom_select_type} from './_module'
const CustomeSelectSearch = ({
  onChange,
  options,
  value,
  className,
  isLoading,
  isLoadTrueFalse,
  placeholder,
}: any) => {
  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option === value) : ''
  }
  return (
    <div className={className}>
      <Select
        placeholder={placeholder}
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value ? value : '')
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

export default CustomeSelectSearch
