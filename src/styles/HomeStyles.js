/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#303030',
  },
  searchInput: {
    marginTop: 20,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  trend: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trendTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#303030',
  },
  trendBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  trendCTA: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E23E3E',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginRight: 10,
  },
  imgTitle: {
    color: '#303030',
    fontWeight: 'bold',
    fontSize: 16, marginTop: 12,
  },
  Flatlist: {
    marginTop: 16,
    display: 'flex',
  },
  saveImage: {
    backgroundColor: '#fff',
    borderRadius: 50,
    tintColor: '#000',
  },
  savedImage: {
    backgroundColor: '#E23E3E',
    tintColor: '#fff',
    borderRadius: 50,
  },
  header: {
  },
  popular: {
    marginTop: 50,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#303030',
  },
  categoryTxt: {
    color: '#EE8B8B',
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectedCategoryTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginTop: 16,
  },
  selectedCategoryBtn: {
    backgroundColor: '#EE8B8B',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    paddingVertical: 5,
    marginTop: 16,
  },
  mealImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: -50,
  },
  mealTxt: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303030',
    textAlign: 'center',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    padding: 10,
    width: 150,
    height: 156,
    marginVertical: 60,
  },
  time: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#C1C1C1',
    textAlign: 'center',
  },
  second: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#303030',
  },
});

export default styles;