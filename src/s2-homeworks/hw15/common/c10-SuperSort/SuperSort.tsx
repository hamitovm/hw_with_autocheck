import React from 'react'
import s from '../../HW15.module.css'
import upIcon from '../../images/up.png'
import downIcon from '../../images/down.png'
import noneIcon from '../../images/sort.png'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    const newSort = sort === down
        ? up
        : sort === up
            ? ''
            : down
    return newSort // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.sort}
        >
            <span className={s.sortValue}>{value}</span>
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.sortIcon}
                alt={'sort icon'}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
