
import { CancelIcon } from "../../icons/CancelIcon"
import { Button } from "./Buttons";
import { Input } from "./Input";


export function CreateContentModal({open, onClose}){
    return <div>
        {open && <div className="w-screen h-screen pl-0 pr-0 bg-slate-600 fixed opacity-85 flex justify-center py-50">
            <div className="justify-center flex-col flex ">
                <span className="bg-white rounded opacity-100 px-3">
                  <div className="flex justify-end pt-2">
                    <div onClick={onClose} className="cursor-pointer ">
                        <CancelIcon/>
                    </div>
                  </div>
                  <div className="pt-3">
                        <Input placeholder = {"Title"} />
                        <div className="pt-2 "></div>
                        <Input placeholder = {"Link"} />

                  </div>
                       <div className="justify-center flex pt-2.5 py-2.5  ">
                             <Button varient="primary" size="md" text="Submit"/>
                       </div>
                </span>
            </div>
        </div> }
    </div>
}
