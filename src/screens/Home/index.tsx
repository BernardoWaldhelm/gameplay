import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida!",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Call of Duty- Warzone",
        icon: null,
        owner: false,
      },
      category: "3",
      date: "22/06 às 22:40h",
      description:
        "Prepare-se para o impacto!",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Valorant",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "23/06 às 10:00h",
      description:
        "Prepare-se para o impacto!",
    },
  ];

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 3" />
        </View>

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
