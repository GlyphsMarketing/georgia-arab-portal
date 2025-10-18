import { useState } from 'react'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

const FormField = ({ 
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options = [],
  rows = 4,
  language = 'en',
  className = '',
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const translations = {
    en: {
      required: 'This field is required',
      selectOption: 'Select an option'
    },
    ar: {
      required: 'هذا الحقل مطلوب',
      selectOption: 'اختر خياراً'
    }
  }

  const t = translations[language]

  const renderField = () => {
    switch (type) {
      case 'password':
        return (
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`pr-10 ${error ? 'border-red-500' : ''} ${className}`}
              {...props}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        )

      case 'textarea':
        return (
          <Textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            className={`${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
        )

      case 'select':
        return (
          <Select value={value} onValueChange={(val) => onChange({ target: { name, value: val } })}>
            <SelectTrigger className={`${error ? 'border-red-500' : ''} ${className}`}>
              <SelectValue placeholder={placeholder || t.selectOption} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              checked={value}
              onCheckedChange={(checked) => onChange({ target: { name, value: checked } })}
              className={error ? 'border-red-500' : ''}
            />
            <Label htmlFor={name} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {label}
            </Label>
          </div>
        )

      default:
        return (
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
        )
    }
  }

  if (type === 'checkbox') {
    return (
      <div className="space-y-2">
        {renderField()}
        {error && (
          <div className="flex items-center space-x-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={name} className="text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      {renderField()}
      {error && (
        <div className="flex items-center space-x-1 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default FormField
