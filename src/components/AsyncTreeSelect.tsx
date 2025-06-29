import { InfoCircleFilled } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { TreeSelectProps, Tooltip, TreeSelect } from 'antd'
import { DependencyList } from 'react'

function AsyncTreeSelect(
  props: TreeSelectProps & {
    fetchTreedData: (params?: any) => Promise<any>
    refreshDeps?: DependencyList
  }
) {
  const { fetchTreedData, refreshDeps, ...rest } = props
  const { loading, data, error, refresh } = useRequest(fetchTreedData, {
    refreshDeps,
  })

  return (
    <TreeSelect
      loading={loading}
      treeData={data}
      placeholder={'請選擇'}
      {...rest}
      suffixIcon={
        !loading && error ? (
          <Tooltip title="點擊重試">
            <InfoCircleFilled
              style={{ color: 'red' }}
              onClick={refresh}
            ></InfoCircleFilled>
          </Tooltip>
        ) : undefined
      }
    ></TreeSelect>
  )
}
export default AsyncTreeSelect
