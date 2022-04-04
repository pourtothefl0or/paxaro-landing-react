import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'
import iconRussian from '../../assets/images/Flags/circle-russian.svg'
import iconEnglish from '../../assets/images/Flags/circle-english.svg'
import iconKazakh from '../../assets/images/Flags/circle-kazakh.svg'
import iconTurkish from '../../assets/images/Flags/circle-turkish.svg'
import iconChinese from '../../assets/images/Flags/circle-chinese.svg'
import iconIndonesian from '../../assets/images/Flags/circle-indonesian.svg'

const Language = () => {
  const languageList = [
    {
      id: 1,
      value: 'russian',
      abbr: 'Ru',
      label: 'Россия',
      image: iconRussian
    },
    {
      id: 2,
      value: 'english',
      abbr: 'En',
      label: 'English',
      image: iconEnglish
    },
    {
      id: 3,
      value: 'kazakh',
      abbr: 'Kz',
      label: 'Қазақстан',
      image: iconKazakh
    },
    {
      id: 4,
      value: 'turkish',
      abbr: 'Tr',
      label: 'Türkiye',
      image: iconTurkish
    },
    {
      id: 5,
      value: 'chinese',
      abbr: 'Zh',
      label: '中国',
      image: iconChinese
    },
    {
      id: 6,
      value: 'indonesian',
      abbr: 'Id',
      label: 'Indonesia',
      image: iconIndonesian
    },
  ]

  const [menuVisible, setMenuVisible] = useState(false)

  const [optionKey, setOptionKey] = useState(languageList[0].id)

  const getOptionId = el => setOptionKey(el)

  const findId = items => items.id === optionKey
  const item = languageList.find(findId)

  const [windowWidth, getWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => getWindowWidth(window.innerWidth));
  })

  return (
    <CustomSelect>
      <SelectButton
        className='select-option--single'
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <SelectOptionImage src={item.image} alt={item.label}/>
        <SelectOptionText>
          {
            windowWidth > 1024
            ? item.abbr
            : item.label
          }
        </SelectOptionText>
      </SelectButton>
      <SelectListInner className={!menuVisible ? '' : 'is-open'}>
        <SelectList>
          {
            languageList.map(el =>
              <SelectOption
                key={el.id}
                onClick={() => {
                  getOptionId(el.id)
                  setMenuVisible(!menuVisible)
                }}
              >
                <SelectOptionImage src={el.image} alt={el.label}/>
                <SelectOptionText>{el.label}</SelectOptionText>
              </SelectOption>
            )
          }
        </SelectList>
      </SelectListInner>
    </CustomSelect>
  )
}

const SelectButton = styled.div`
  position: relative;
  ${TYPOGRAPHY.caption2Semibold14}
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: background-color;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: inline-block;
    border: 2px solid transparent;
    border-radius: ${PRIMARY.primaryRadius};
    padding: 9px;
    text-align: center;
    color: ${COLORS.black};
    background: ${COLORS.white};
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: box-shadow;

    .select-option__image {
      display: none;
    }

    &:focus,
    &:hover {
      box-shadow: ${PRIMARY.primaryShadow};
    }
  }

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 10px 20px;
    color: ${COLORS.white};
    background-color: ${COLORS.darkBlack};

    &:hover {
      background-color: #292929;
    }
  }
`

const CustomSelect = styled.div`
  position: relative;

  @media (max-width: 1023px) {
    margin: auto -${PRIMARY.primaryHorizontalIndent} 0;
  }
`

const SelectListInner = styled.div`
  position: absolute;
  right: 0;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: opacity, visibility;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 1024px) {
    top: calc(100% + 8px);
  }

  @media (max-width: 1023px) {
    bottom: 100%;
    left: 0;
  }
`

const SelectList = styled.div`
  @media (min-width: 1024px) {
    border-radius: ${PRIMARY.primaryRadius};
    background-color: ${COLORS.white};
    box-shadow: 0 6px 23px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1023px) {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: 1px solid #292929;
    padding-top: 20px;
    background-color: ${COLORS.darkBlack};
  }
`

const SelectOption = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: background-color;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 7px 22px 7px 13px;
    color: ${COLORS.black};

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      border-radius: 2px;
      width: 0%;
      height: 2px;
      background-color: ${COLORS.green};
      transform: translateX(-50%);
      transition: all ${PRIMARY.primaryAnimation};
      transition-property: width;
    }

    &:hover {
      &::after {
        content: '';
        width: calc(100% - 26px);
      }
    }
  }

  @media (max-width: 1023px) {
    padding: 10px 20px;
    color: ${COLORS.white};
    background-color: ${COLORS.darkBlack};

    &:hover {
      background-color: #292929;
    }
  }
`

const SelectOptionText = styled.p`
  margin: 0;
  width: 100%;
  min-width: 16px;
  ${TYPOGRAPHY.caption2Semibold14}
`

const SelectOptionImage = styled.img.attrs({
  className: 'select-option__image'
})`
  --size: 14px;

  display: inline-block;
  border-radius: 100%;
  max-width: none;
  width: var(--size);
  height: var(--size);

  @media (max-width: 1023px) {
    --size: 24px;
  }
`

export default Language
