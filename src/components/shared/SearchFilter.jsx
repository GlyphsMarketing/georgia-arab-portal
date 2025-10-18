import { useState } from 'react'
import { Search, Filter, X, Grid, List } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const SearchFilter = ({
  searchValue,
  onSearchChange,
  filters = [],
  activeFilters = {},
  onFilterChange,
  onClearFilters,
  viewMode = 'grid',
  onViewModeChange,
  showViewToggle = true,
  language = 'en',
  className = ''
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const translations = {
    en: {
      search: 'Search...',
      filters: 'Filters',
      clearAll: 'Clear All',
      apply: 'Apply Filters',
      noFilters: 'No active filters',
      results: 'results'
    },
    ar: {
      search: 'البحث...',
      filters: 'المرشحات',
      clearAll: 'مسح الكل',
      apply: 'تطبيق المرشحات',
      noFilters: 'لا توجد مرشحات نشطة',
      results: 'نتيجة'
    }
  }

  const t = translations[language]

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).filter(value => 
      Array.isArray(value) ? value.length > 0 : value
    ).length
  }

  const renderFilterContent = () => (
    <div className="space-y-6">
      {filters.map((filter) => (
        <div key={filter.key} className="space-y-3">
          <h4 className="font-medium text-sm">{filter.label}</h4>
          
          {filter.type === 'select' && (
            <Select
              value={activeFilters[filter.key] || ''}
              onValueChange={(value) => onFilterChange(filter.key, value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={filter.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {filter.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {filter.type === 'checkbox' && (
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {filter.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${filter.key}-${option.value}`}
                    checked={(activeFilters[filter.key] || []).includes(option.value)}
                    onCheckedChange={(checked) => {
                      const currentValues = activeFilters[filter.key] || []
                      const newValues = checked
                        ? [...currentValues, option.value]
                        : currentValues.filter(v => v !== option.value)
                      onFilterChange(filter.key, newValues)
                    }}
                  />
                  <Label 
                    htmlFor={`${filter.key}-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          )}

          {filter.type === 'range' && (
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder={filter.minPlaceholder}
                value={activeFilters[`${filter.key}_min`] || ''}
                onChange={(e) => onFilterChange(`${filter.key}_min`, e.target.value)}
              />
              <Input
                type="number"
                placeholder={filter.maxPlaceholder}
                value={activeFilters[`${filter.key}_max`] || ''}
                onChange={(e) => onFilterChange(`${filter.key}_max`, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t.search}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          {/* Mobile Filter Sheet */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden">
                <Filter className="h-4 w-4 mr-2" />
                {t.filters}
                {getActiveFilterCount() > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'left' : 'right'} className="bg-background text-foreground">
              <SheetHeader>
                <SheetTitle className="text-foreground">{t.filters}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                {renderFilterContent()}
                <div className="flex gap-2 mt-6">
                  <Button onClick={() => setIsFilterOpen(false)} className="flex-1">
                    {t.apply}
                  </Button>
                  <Button variant="outline" onClick={onClearFilters}>
                    {t.clearAll}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Filter Button */}
          <Button variant="outline" className="hidden sm:flex">
            <Filter className="h-4 w-4 mr-2" />
            {t.filters}
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>

          {/* View Mode Toggle */}
          {showViewToggle && (
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filters.slice(0, 6).map((filter) => (
            <div key={filter.key}>
              {filter.type === 'select' && (
                <Select
                  value={activeFilters[filter.key] || ''}
                  onValueChange={(value) => onFilterChange(filter.key, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={filter.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options?.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {getActiveFilterCount() > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">{t.filters}:</span>
          {Object.entries(activeFilters).map(([key, value]) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return null
            
            const filter = filters.find(f => f.key === key || key.startsWith(f.key))
            if (!filter) return null

            if (Array.isArray(value)) {
              return value.map(v => (
                <Badge key={`${key}-${v}`} variant="secondary" className="gap-1">
                  {filter.options?.find(opt => opt.value === v)?.label || v}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => {
                      const newValues = value.filter(val => val !== v)
                      onFilterChange(key, newValues)
                    }}
                  />
                </Badge>
              ))
            }

            return (
              <Badge key={key} variant="secondary" className="gap-1">
                {filter.options?.find(opt => opt.value === value)?.label || value}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => onFilterChange(key, '')}
                />
              </Badge>
            )
          })}
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            {t.clearAll}
          </Button>
        </div>
      )}
    </div>
  )
}

export default SearchFilter
