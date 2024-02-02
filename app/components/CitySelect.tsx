'use client'
import Select from 'react-select'
import useCities from '@hooks/useCities'

export type CitiesSelectValue = {
  value: string
  district: string
  subject: string
  coordsLat: number
  coordsLon: number
}

interface CitySelect {
  value?: CitiesSelectValue
  onChange: (value: CitiesSelectValue) => void
}

const CitySelect: React.FC<CitySelect> = ({ value, onChange }) => {
  const { getAll } = useCities()

  return (
    <div>
      <Select
        value={value}
        placeholder="Город"
        isClearable
        options={getAll()}
        onChange={(value) => onChange(value as CitiesSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>
              {option.value},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#e2e2e2',
          },
        })}
      />
    </div>
  )
}

export default CitySelect
