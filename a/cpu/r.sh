#!/bin/bash  

if [ ! -f "lists.txt" ]; then  
    echo "Error: lists.txt file not found."  
    exit 1  
fi  
   
while IFS= read -r line; do  

    trimmed_line=$(echo "$line" | sed 's/ *$//' | tr -d '[:space:]' | tr A-Z a-z)  
    title_line=$(echo "$line" | sed 's/ *$//' )
    if [ -n "$trimmed_line" ]; then  
        touch "${trimmed_line}.md"
        echo "---
lang: zh-CN
title: "${title_line} 中央处理器指南"
description: ${title_line}
category: 
    - 中央处理器
tag: 
Date: 
star: 
sticky: 
---

<div class='ua-list'></div>

## ${title_line}

" > "${trimmed_line}.md"  
        echo "Created file: ${trimmed_line}.md"  
    fi  
done < lists.txt  
  


echo "All .md files have been created successfully."
