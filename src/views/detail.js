import {View} from "react-native";
import * as React from "react";
import Text from "../components/text";
import {SafeAreaView,ScrollView} from "react-native";

import FocusAwareStatusBar from "../components/focus-aware-status-bar";
import Box from "../components/box";
import theme from "../utils/theme";
import ActionButton, {ActionButtonTitle} from "../components/action-button";
import More from "../components/icons/More";
import Favorite from "../components/icons/Favorite";
import Sound from "../components/icons/Sound";
import Hand from "../components/icons/Hand";
import {
    DetailSummaryItemContainer,
    DetailSummaryItemSummary,
    DetailSummaryItemTitle
} from "../components/detail-summary-item";

function DetailView() {
    return (

        <Box as={SafeAreaView} flex={1} bg={theme.colors.softRed} p={16}>
            <FocusAwareStatusBar barStyle="dark-content"  backgroundColor={theme.colors.softRed} />
            <Box as={ScrollView} p={16}>
            <Box>
                <Text fontSize={32} fontWeight={"bold"}>Kalem</Text>
                <Text color={"textLight"} mt={6}>Arapça Kalem</Text>
            </Box>
            <Box flexDirection={"row"} mt={24}>
                <ActionButton >
                    <Sound color={theme.colors.textLight}></Sound>
                </ActionButton>
                <ActionButton ml={12}>
                    <Favorite  color={theme.colors.textLight}></Favorite>
                </ActionButton>
                <ActionButton ml={"auto"}>
                    <Hand color={theme.colors.textLight}></Hand>
                    <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
                </ActionButton>
            </Box>
            <Box mt={32}>
                <DetailSummaryItemContainer>
                    <DetailSummaryItemTitle>
                        Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                    </DetailSummaryItemTitle>
                    <DetailSummaryItemSummary>
                        "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
                        Atay
                    </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
                <DetailSummaryItemContainer border>
                    <DetailSummaryItemTitle>
                        Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                    </DetailSummaryItemTitle>
                    <DetailSummaryItemSummary>
                        "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
                        Atay
                    </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
                <DetailSummaryItemContainer border>
                    <DetailSummaryItemTitle>
                        Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                    </DetailSummaryItemTitle>
                    <DetailSummaryItemSummary>
                        "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
                        Atay
                    </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
            </Box>
            </Box>

        </Box>
    );
}

export default DetailView
