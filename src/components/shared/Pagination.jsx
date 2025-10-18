import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
  language = 'en',
  className = ''
}) => {
  const translations = {
    en: {
      showing: 'Showing',
      to: 'to',
      of: 'of',
      results: 'results',
      previous: 'Previous',
      next: 'Next',
      itemsPerPage: 'Items per page',
      page: 'Page',
      goToPage: 'Go to page'
    },
    ar: {
      showing: 'عرض',
      to: 'إلى',
      of: 'من',
      results: 'نتيجة',
      previous: 'السابق',
      next: 'التالي',
      itemsPerPage: 'عناصر لكل صفحة',
      page: 'صفحة',
      goToPage: 'الذهاب إلى الصفحة'
    }
  }

  const t = translations[language]

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      {/* Results Info */}
      <div className="text-sm text-muted-foreground">
        {t.showing} {startItem} {t.to} {endItem} {t.of} {totalItems} {t.results}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Items per page selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:block">
            {t.itemsPerPage}:
          </span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => onItemsPerPageChange(parseInt(value))}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center gap-1">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t.previous}</span>
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {visiblePages.map((page, index) => {
              if (page === '...') {
                return (
                  <Button
                    key={`dots-${index}`}
                    variant="ghost"
                    size="sm"
                    disabled
                    className="w-10"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                )
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onPageChange(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              )
            })}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="gap-1"
          >
            <span className="hidden sm:inline">{t.next}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Page Info */}
      <div className="sm:hidden text-sm text-muted-foreground">
        {t.page} {currentPage} {t.of} {totalPages}
      </div>
    </div>
  )
}

export default Pagination
