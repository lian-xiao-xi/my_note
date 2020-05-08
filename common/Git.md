# Git

## Git 常用命令

- 查看提交历史（不能查看被删除的commit记录） `git log`
- 查看所有操作记录（包括被删除的 commit 记录和 reset 的操作） `git reflog`
- 查看分支 `git branch` `git branch -a`
- 创建分支 `git branch <branch_name>`
- 切换分支 `git checkout <branch_name>`
- 创建并切换到此分支 `git checkout -b <branch_name>`
- 取远程分支并创建一个新本地分支 `git checkout -b <branch_name>  origin/<branch_name>` (应用场景: 当我们刚从git上clone一个项目到本地后,只会默认创建一个master本地分支，其他都是远程分支，此时如果想切换到 <branch_name> 的远程分支就可以使用该命令)
- 合并某分支到当前分支 `git merge <branch_name>`
- 删除分支 `git branch -d <branch_name>`
