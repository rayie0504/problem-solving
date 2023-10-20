/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const navieApproach = (s)=>{
    let stack = [];
    // stack.push('s');
    for(let i = 0 ; i < s.length ; i++){
        if(s.charAt(i) == '[' || s.charAt(i) == '(' || s.charAt(i) == '{'  ){
            stack.push(s.charAt(i));
        } else if(stack[stack.length-1] == '[' && s.charAt(i) == ']'){
                stack.pop();
            }else if (stack[stack.length-1] == '(' && s.charAt(i) == ')'){
                stack.pop();
            }else if (stack[stack.length-1] == '{' && s.charAt(i) == '}'){
                stack.pop();
            }else {
                stack.push(s.charAt(i));
            }
        }
    if(stack.length == 0)
        return true;
    return false;
}

const efficientApproach = (s)=>{
    let parenthesesMatch = {
            '{':'}',
            '[':']',
            '(':')',
    }
    let stack = []
    for(let char of s){
        if(parenthesesMatch[char]){
            stack.push(char)
        }else {
            let top = stack.pop()
            if(char != parenthesesMatch[top]){
                return false
            }
        }
    }
    return stack.length == 0
}
