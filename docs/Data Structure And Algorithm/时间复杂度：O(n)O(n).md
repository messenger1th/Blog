时间复杂度：$O(n)$ 

空间复杂度：$O(n)$



时间复杂度：$O(n^2)$

空间辅助度：$O(1)$



时间复杂度：$O(n\log {n})$

时间复杂度：$O(1)$



时间复杂度： $O(\log{m})$

空间复杂度： $O(\log{m})$

```
void deletevaluesInRange(ListNode* head, int min, int max) {
    while (head->next) {
        if (head->next->val < min && head->next->val < max) {
            ListNode* del = head->next;//记录需要删除的节点
            head->next = head->next->next;
            delete del;//C++释放内存
//            free(del); //C语言释放malloc内存
        } else {
            head = head->next;
        }
    }
}
```
