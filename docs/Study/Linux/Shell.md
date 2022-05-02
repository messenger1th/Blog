## Shell Script File

1. Create `vim filename.sh`

2. execute`bash file`

3. change the authority`chmod a+x file`

4. add this line at the first line at all file

   ```bash
   #!/bin/bash
   ```

## Variable

1. declaration & assignment

   ```bash
   var="string" #中间不能有空格
   ```

2. get the value of `val`

   ```bash
   $var #${val} {} is used to divide the string
   ```

3. Array variable

   ```bash
   arr[0]="val1"
   arr[1]="val2"
   echo ${arr[0]}
   declare -a arrname #declare an array explicitly
   arr2={this is an example of shell script}
   echo ${arr2[8]} #out of range, then output null string
   echo ${arr2[*]}
   ```

## arithmetic operation

1. execute `let "j=i*6+2"` or `((j=i*6+2))`

   ```bash
   $!/bin/bash
   echo "Input 3 integers."
   read a b c
   let "res1=a+b+c"
   let "res2=(a*b*c)/(a*b+a*c+b*c)"
   echo "$res1"
   echo "$res2"
   ```



## Special Character & Command Syntax

1. double quotation marks (except $ `` \\)

2. comment & pipeline & background command
3. 