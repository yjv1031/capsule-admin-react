import { commonStateStore } from "../../store/commonStore"

export default function Loading() {
  const { isLoading } = commonStateStore();
  return (
    <>
      {
        isLoading? (<div className="loading_area"></div>) : ''
      }
    </>
  )
}