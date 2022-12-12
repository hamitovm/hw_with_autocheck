import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        const firstItemNumberOnCurrentPage = (page - 1) * itemsCountForPage + 1
        const newPage = Math.ceil(firstItemNumberOnCurrentPage / +event.target.value)
        onChange(newPage, +event.target.value)
    }

    return (
        <div className={s.pagination}>
            <div className={s.pageNumbers}>
                <Pagination
                    id={id + '-pagination'}
                    sx={{
                        // стили для Pagination // пишет студент
                        // backgroundColor: '#0066CC'
                    }}
                    page={page}
                    count={lastPage}
                    onChange={onChangeCallback}
                    hideNextButton
                    hidePrevButton
                    shape={'rounded'}
                    color="primary"
                />
            </div>
            <div className={s.superSort}>
                <span className={s.text1}>
                Показать
                </span>

                <SuperSelect
                    id={id + '-pagination-select'}
                    value={itemsCountForPage}
                    options={[
                        {id: 4, value: 4},
                        {id: 7, value: 7},
                        {id: 10, value: 10},
                    ]}
                    onChange={onChangeSelect}
                />

                <span className={s.text2}>
                строк в таблице
            </span>
            </div>

        </div>
    )
}

export default SuperPagination
