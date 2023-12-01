const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Header />
            {children}
            <Footer />
        </View>
    );
};
