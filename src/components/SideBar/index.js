import React, { useState, useContext } from "react";

//Context
import { dataContext } from "../../context/dataContext.js";

//Scripts
import { filterArr } from "../../services/utils.js";

//Components
import ModalTag from "../Modal/modalTag";
import TagComponent from "./Tag";

//Minor components
import {
  Container,
  Head,
  Body,
  SearchContent,
  Input,
  Foot,
  AddIcon,
} from "./styles";

const SideBar = () => {
  const { tagList, todoList } = useContext(dataContext);
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Container>
        <div>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {tagList?.length > 0 ? (
              <>
                <SearchContent>
                  <Input
                    placeholder="Search for tags..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                  />
                </SearchContent>
                {filterArr(searchValue, tagList, "text").map((data, index) => (
                  <TagComponent data={data} index={index} key={index} />
                ))}
              </>
            ) : (
              <h3>You dont have any tags yet</h3>
            )}
          </Body>
        </div>
        <div>
          {todoList?.length > 0 && (
            <TagComponent
              data={{ color: "red", text: "Hide done todo's" }}
              index={0}
              type={"CheckDone"}
              style={{ marginBottom: "20px" }}
            />
          )}
          <Foot>
            <AddIcon onClick={() => setShowModal(true)} />
            <span onClick={() => setShowModal(true)}>Add a new tag</span>
          </Foot>
        </div>
      </Container>
      <ModalTag hideModal={() => setShowModal(false)} showModal={showModal} />
    </>
  );
};

export default SideBar;
