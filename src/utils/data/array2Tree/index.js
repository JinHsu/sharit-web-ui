import arraySort from "../arraySort";
import array2Map from '../array2Map'

let idField = '', pIdField = '', sortField = ''

/**
 * 数组转为树
 * @param array 要转换的数组
 * @param idFieldName 主键字段名称
 * @param parentIdFieldName 上级主键字段名称
 * @param sortFieldName 排序字段名称
 * @returns {tree}
 */
export default function array2Tree(array = [],
                                   {idFieldName = 'id', parentIdFieldName = 'parentId', compareFieldName: sortFieldName = 'code'}) {
    if (array.length === 0) {
        return null
    }
    idField = idFieldName
    pIdField = parentIdFieldName
    sortField = sortFieldName

    const dataMap = array2Map(array, idField)

    const rootNode = {[idField]: null}

    array2Tree2(dataMap, rootNode)

    return rootNode.children
}

function array2Tree2(dataMap, treeNode) {
    if (!treeNode.children) {
        treeNode.children = []
    }
    let iterator = dataMap.keys()
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {value, done} = iterator.next()
        if (done) {
            break
        }
        const node = dataMap.get(value)
        if (!treeNode[idField] && !node[pIdField] || treeNode[idField] === node[pIdField]) {
            treeNode.children.push(node)
            dataMap.delete(value)
        }
    }

    // 排序
    arraySort(treeNode.children, sortField)

    // 迭代子树
    treeNode.children.forEach((item) => {
        array2Tree2(dataMap, item)
    })

    // 没有下级,删除children属性
    if (treeNode.children.length === 0) {
        delete treeNode.children
    }

}
