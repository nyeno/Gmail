import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../context/appContext";
import MinimizeIcon from "@mui/icons-material/Minimize";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function ComposeModal() {
  const [composeClass, setComposeClass] = useState();
  const [isExpand, setIsExpand] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [onResponse, setOnResponse] = useState(true);
  const [isCc, setIsCc] = useState(false);
  const [isCc2, setIsCc2] = useState(false);
  const [isBcc, setIsBcc] = useState(false);
  const [isBcc2, setIsBcc2] = useState(false);
  const [ccContent, setCcContent] = useState("");
  const [bccContent, setBccContent] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [Title, setTitle] = useState("New Message");
  const [state, dispatch] = useContext(AppContext);
  const inputRef = useRef();
  useEffect(() => {
    if (state.composeOpen) {
      setComposeClass(
        "w-[600px] h-[600px] bg-white absolute bottom-0 right-8 drop-shadow-2xl rounded-t-lg z-10"
      );
    } else {
      setComposeClass("hidden");
    }
  }, [state]);
  const closeModal = () => {
    setIsExpand(false);
    setIsMinimized(false);
    setOnResponse(true);
    setIsCc(false);
    setIsBcc(false);
    setIsCc2(false);
    setIsBcc2(false);
    setCcContent("");
    setBccContent("");
    setSubject("");
    setTo("");
    setMailContent("");
    dispatch({
      type: "SET_COMPOSE",
      payload: {
        composeOpen: false,
      },
    });
  };
  const expandModal = () => {
    setComposeClass(
      "w-[80%] h-[90%] bg-white absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] drop-shadow-2xl rounded-t-lg z-10"
    );
    setIsExpand(true);
  };
  const unexpandModal = () => {
    setComposeClass(
      "w-[600px] h-[600px] bg-white absolute bottom-0 right-8 drop-shadow-2xl rounded-t-lg z-10"
    );
    setIsExpand(false);
  };
  const minimizeModal = () => {
    if (isMinimized) {
      setComposeClass(
        "w-[600px] h-[600px] bg-white absolute bottom-0 right-8 drop-shadow-2xl rounded-t-lg z-10"
      );
      setIsMinimized(false);
      setIsExpand(false);
    } else {
      setComposeClass(
        "w-[250px] bg-white absolute bottom-0 right-8 drop-shadow-2xl rounded-t-lg z-10"
      );
      setIsMinimized(true);
      setIsExpand(false);
    }
  };
  const cleanUp = () => {
    if (to.length < 1) {
      setOnResponse(true);
    }
    if (ccContent.length < 1) {
      setIsCc(false);
      setIsCc2(false);
    }
    if (bccContent.length < 1) {
      setIsBcc(false);
      setIsBcc2(false);
    }
  };
  const handleTitleChange = () => {
    if (subject.length > 0) {
      setTitle(subject);
    }
  };

  const EditableContent = (e) => {
    setMailContent(e.target.outerText);
    inputRef.current.focus();
  };
  return (
    <div>
      <div className={composeClass}>
        <div className="cursor-pointer flex bg-slate-100 px-3 py-2 rounded-t-lg justify-between items-center">
          <p className="w-[70%] text-sm text-gray-900" onClick={minimizeModal}>
            {Title}
          </p>
          <div>
            <MinimizeIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={minimizeModal}
            />
            <OpenInFullIcon
              fontSize="small"
              className={`cursor-pointer ${isExpand ? "hidden" : "inline"}`}
              onClick={expandModal}
            />
            <CloseFullscreenIcon
              fontSize="small"
              className={`cursor-pointer ${isExpand ? "inline" : "hidden"}`}
              onClick={unexpandModal}
            />
            <CloseIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center justify-between border-b-[1px] border-grey-100 py-2">
            <div className="flex items-center">
              <p
                onClick={() => {
                  setOnResponse(false);
                }}
                className="text-sm text-gray-600 mr-2"
              >
                {onResponse ? "Recipients" : "To"}
              </p>
              <input
                onClick={() => {
                  setOnResponse(false);
                }}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                className="w-[500px]"
                value={to}
              />
            </div>
            <div className={`${onResponse ? "hidden" : "flex"}`}>
              <span
                onClick={() => {
                  setIsCc(true);
                }}
                className={`${
                  isBcc || isCc ? "hidden" : "flex"
                } text-sm text-gray-500 hover:underline cursor-pointer`}
              >
                Cc
              </span>
              <span
                onClick={() => {
                  setIsBcc(true);
                }}
                className={`${
                  isBcc || isCc ? "hidden" : "flex"
                } text-sm text-gray-500 ml-1 hover:underline cursor-pointer`}
              >
                Bcc
              </span>
            </div>
          </div>

          <div
            className={`${
              isCc2 || isCc ? "flex" : "hidden"
            } justify-between border-b-[1px] border-grey-100 py-2`}
          >
            <div className="flex items-center">
              <p className="text-sm text-gray-600 mr-2">Cc</p>
              <input
                className="w-[500px]"
                value={ccContent}
                onChange={(e) => {
                  setCcContent(e.target.value);
                }}
              />
            </div>
            <div className={`${onResponse ? "hidden" : "flex"}`}>
              <span
                onClick={() => {
                  setIsBcc2(true);
                  setIsCc2(true);
                }}
                className={`${
                  isCc2 ? "hidden" : "flex"
                } text-sm text-gray-500 ml-1 hover:underline cursor-pointer`}
              >
                Bcc
              </span>
            </div>
          </div>

          <div
            className={`${
              isBcc2 || isBcc ? "flex" : "hidden"
            } justify-between border-b-[1px] border-grey-100 py-2`}
          >
            <div className="flex items-center">
              <p className="text-sm text-gray-600 mr-2">Bcc</p>
              <input
                className="w-[500px]"
                value={bccContent}
                onChange={(e) => {
                  setBccContent(e.target.value);
                }}
              />
            </div>
            <div className={`${onResponse ? "hidden" : "flex"}`}>
              <span
                onClick={() => {
                  setIsCc2(true);
                  setIsBcc2(true);
                }}
                className={`${
                  isBcc2 ? "hidden" : "flex"
                } text-sm text-gray-500 hover:underline cursor-pointer`}
              >
                Cc
              </span>
            </div>
          </div>

          <div className="flex justify-between border-b-[1px] border-grey-100 py-2 mb-3">
            <input
              onClick={cleanUp}
              onBlur={handleTitleChange}
              className="placeholder:text-gray-600 placeholder:text-sm text-sm w-[500px]"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div
            contentEditable="true"
            ref={inputRef}
            onInput={EditableContent}
            onClick={cleanUp}
            className={`text-sm ${
              isExpand ? "w-[90%] h-[700px]" : "w-[570px] h-[400px]"
            } outline-none overflow-auto`}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[100%] flex justify-between items-center px-3 py-3">
          <div className="flex items-center">
            <div className="bg-blue-700 flex rounded-2xl hover:drop-shadow-lg cursor-pointer mr-2">
              <p className="text-white px-4 pl-5 py-2 text-sm">Send</p>
              <div className="ml-1 px-1 border-l-[1px] border-black pt-[3px]">
                <ArrowDropDownOutlinedIcon className="text-white " />
              </div>
            </div>
            <AttachFileOutlinedIcon className="mr-2 cursor-pointer" />
            <LinkOutlinedIcon className="mr-2 cursor-pointer" />
            <InsertEmoticonOutlinedIcon className="mr-2 cursor-pointer" />
          </div>
          <DeleteOutlineOutlinedIcon
            onClick={closeModal}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`w-full h-full absolute top-0 left-0 bg-black opacity-50 ${
          isExpand ? "inline" : "hidden"
        }`}
      ></div>
    </div>
  );
}

export default ComposeModal;
