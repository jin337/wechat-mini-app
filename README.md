## GIthub的API访问链接是区分大小写的

### 获取个人github信息

```
// 官方api
https://api.github.com/

// 用户名：solomonxie
// 个人信息
https://api.github.com/users/solomonxie

// 个人所有repo列表
https://api.github.com/users/用户名/repos
// repo详细信息
https://api.github.com/repos/用户名/仓库名

// 获取某个repo的内容列表-只会返回根目录的内容
https://api.github.com/repos/solomonxie/gists/contents

获取repo中子目录的内容列表
https://api.github.com/repos/solomonxie/gists/contents/目录名

// 获取repo中某文件信息（不包括内容）
https://api.github.com/repos/solomonxie/gists/contents/文件路径

// repo中所有的commits列表
https://api.github.com/repos/用户名/仓库名/commits

// 某一条commit详情
https://api.github.com/repos/用户名/仓库名/commits/某一条commit的SHA
// issues列表
https://api.github.com/repos/用户名/仓库名/issues

// 某条issue详情-issues都是以1,2,3这样的序列排号的
https://api.github.com/repos/用户名/仓库名/issues/序号

// 某issue中的comments列表
https://api.github.com/repos/用户名/仓库名/issues/序号/comments

// 某comment详情-其中评论ID是从issues列表中获得的
https://api.github.com/repos/用户名/仓库名/issues/comments/评论详情的ID
```
