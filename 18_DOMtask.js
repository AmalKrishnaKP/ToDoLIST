 //function for adding the list item
        function adding(e){
            let isempty=list.children[0];
            if(isempty.className == "empty")
                isempty.remove(list.children[0]);
            var values=inputText.value;
            if(values=="")
            {
                alert("please enter a value");
                return;     
            }
            {
                  list.innerHTML+=`
                    <li class="listItem">
                        <div class="itemDiv">
                            <button class="complete">complete</button>
                            <h4 class="itemContent"">${values}</h4>
                            <button class="edit">edit</button>
                            <button class="remove">remove</button>
                        </div>
                    </li>`;
                
            
                // const listing=document.getElementsByTagName("li")[document.getElementsByTagName("li").length-1];
                // listing.textContent=values;
                inputText.value=null;
            }
        }

        // function for editing the list item
        let content="";
        function edited(e){
             
            if(e.target.className=="edit")
            {   
                
                e.target.textContent="done";
                e.target.className="done";
                let current=e.target.parentNode.getElementsByClassName("itemContent")[0];
                let tContent=current.textContent;
                content=current.textContent;
                console.log(content);
                let newInput=document.createElement("input");
                newInput.className="newInput"
                newInput.placeholder=tContent;
                current.parentNode.replaceChild(newInput,current);
            }
            else if(e.target.className=="done"){
                e.target.textContent="edit";
                e.target.className="edit";
                let current=e.target.parentNode.getElementsByClassName("newInput")[0];
                let tcontent=current.value;
                let newH4=document.createElement("h4");
                newH4.className="itemContent";
                if(current.value!=""){
                    newH4.textContent=current.value;
                }
                else{
                    console.log(content);
                    newH4.textContent=content;

                }
                current.parentNode.replaceChild(newH4,current)

            }
        }

        // function for removing the list item
        function removing(e){
            if(e.target.className=="remove")
            {
                e.target.parentNode.parentNode.remove();
                // console.log(document.getElementById("list").childElementCount);
                if(document.getElementById("list").childElementCount==0)
                {
                    let empty=document.createElement("li");
                    empty.className="empty";
                    empty.textContent="No items in the list!";
                    list.appendChild(empty);
                }
            }    
                

        };
        
        // function for marking the completed the list item
        function completed(e){
            if(e.target.className=="complete")
            {
                var p=e.target.parentNode.getElementsByClassName("itemContent")[0];
                p.style.textDecoration="line-through";
            }
            
        };
        // event listener for adding the list item using submit button
        submit.addEventListener("click",adding);


        // event listener for adding the list item using enter key
        inputText.addEventListener("keypress",(e)=>{
            var values=inputText.value;
            if(e.key=="Enter")
            {               
                adding(e);  
            }
            
        });


        // event listener for removing the list item using remove button
        list.addEventListener("click",removing);
        
        // event listener for completing the list item using complete button
        list.addEventListener("click",completed);

        // event listener for editing the list item using edit button
        list.addEventListener("click",edited);