import { AppDispatch, RootState } from "../../core/redux/store";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector