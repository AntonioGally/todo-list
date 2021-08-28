import React, { useState, useContext } from "react";

//Scripts
import { dataContext } from "../../context/dataContext";
import { filterArr } from "../../services/utils.js";

//Components
import ModalTag from "../Modal/modalTag";
import TagComponent from "./Tag";
// import { Checkbox } from "antd";

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
  const { tagList } = useContext(dataContext);
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
        <Foot>
          <AddIcon onClick={() => setShowModal(true)} />
          <span onClick={() => setShowModal(true)}>Add a new tag</span>
        </Foot>
      </Container>
      <ModalTag hideModal={() => setShowModal(false)} showModal={showModal} />
    </>
  );
};

export default SideBar;
