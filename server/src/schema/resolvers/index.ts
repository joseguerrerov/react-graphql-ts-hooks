import { usersMock } from '../../data';

const resolvers = {
  Query: {
    User: (roots, args) => (
      usersMock.find(({ id }) => Number(id) === Number(args.id))
    ),
    Users: () => usersMock,
  },
  User: {
    fullName: roots => `${roots.firstName} ${roots.lastName}`,
  },
};

export default resolvers;
