import { atom } from 'recoil'
import bookmarkList from '../static/BookmarkDummy'

export const BookMarkList = atom({
    key: 'bookmarkList',
    default: bookmarkList
})

export const IsLogin = atom({
    key: 'IsLogin',
    default: true
})

export const updateState = atom({
    key: 'updateState',
    default: null
})

export const bookmarkIsSubmit = atom({
    key: 'bookmarkIsSubmit',
    default: false
})

export const UpdataeState = atom({
    key: 'UpdataeState',
    default: null
})

export const OnChangeValue = atom({
    key: 'OnChangeValue',
    default: {}
})

export const IsSelectBookmark = atom({
    key: 'IsSelectBookmark',
    default: ''
})

export const BookmarkSettingToggle = atom({
    key: 'BookmarkSettingToggle',
    default: 'false'
})

export const NowBookMark = atom({
    key: 'NowBookMark',
    default: {}
})