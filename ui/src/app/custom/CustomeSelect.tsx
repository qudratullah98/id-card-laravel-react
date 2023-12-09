import Select from 'react-select'
import {useRef} from 'react'
import { custom_select_type } from './_module'
import { useIntl } from 'react-intl'

const CustomeSelect = ({onChange, options, value, className, isLoading, isLoadTrueFalse}: any) => {
  const intl = useIntl()

  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.id == value) : ''
  }
  const ref = useRef()
  return (
    <div className={className}>
      <Select
        placeholder={intl.formatMessage({id: 'GLOBAL.SELECT'})}
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
        isSearchable={true}
      />
    </div>
  )
}

export default CustomeSelect
