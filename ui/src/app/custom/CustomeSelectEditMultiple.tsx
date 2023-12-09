import Select from 'react-select'
const CustomeSelectEditMultiple = ({
  onChange,
  options,
  value,
  className,
  isLoading,
  isLoadTrueFalse,
  defaultValues,
}: any) => {
  return (
    <div className={className}>
      <Select
        placeholder={'Select'}
        defaultValue={defaultValues}
        onChange={(value) => {
          onChange(value ? value : '')
        }}
        options={options}
        getOptionLabel={(options: any) => options.label}
        getOptionValue={(options: any) => options.value}
        backspaceRemovesValue={true}
        isMulti={true}
        isLoading={isLoadTrueFalse ? isLoading : false}
        isClearable={true}
      />
    </div>
  )
}
export default CustomeSelectEditMultiple
