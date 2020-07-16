
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default function A() {
  const { data } = useQuery(gql`
  query {
  featured_list{
    name
    id
    original_price
  }
}`);
  console.log(data);
  return <div>a</div>
}
