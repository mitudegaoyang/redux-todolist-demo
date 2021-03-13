import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default Mock.mock('/list','get',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "name|+1": '@cname'
    }]
})